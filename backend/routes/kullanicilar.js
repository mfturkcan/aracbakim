const router = require("express").Router();
const connection = require("../config/database");
const encryptPassword = require("../lib/password").encryptPassword;
const decryptPassword = require("../lib/password").decryptPassword;

router.get("/kullanicilar", function (req, res) {
    console.log("get kullanicilar");
    let sort = req.query.sort != null ? JSON.parse(req.query.sort): null;
    let type = "KullaniciAdi";
    let order = "ASC";
    if (sort) {
        type = sort[0] == "id" ? "KullaniciAdi" : sort[0];
        order = sort[1];
    }

    connection.query(`SELECT * FROM Kullanicilar ORDER BY ${type} ${order}`,
        function (err, result) {
            if (err) {
                console.log(err);
                res.send(err);
            }
            else {
                res.set('Content-Range', 'users 0-24/' + result.length);
                res.set('Access-Control-Expose-Headers', 'Content-Range');
                res.set('X-Total-Count', 10);
                res.send(result);
            }
        });
});

router.post("/kullanicilar", async function (req, res) {
    const yeni_kullanici = req.body;
    const encrypted_sifre = await encryptPassword(yeni_kullanici["Şifre"]);
    console.log("----")
    console.log(yeni_kullanici)
    let error;

    connection.query(`INSERT INTO Kullanicilar (KullaniciAdi, Şifre) VALUES ("${yeni_kullanici["KullaniciAdi"]}", "${encrypted_sifre}" )`,
        function (err, result) {
            if (err) {
                console.log(err);
                res.send(err);
            }
            if (yeni_kullanici["BirimKodu"] != null) {
                connection.query(`INSERT INTO Birimler (BirimKodu, BirimAdi, BulunduguAdres, IlKodu, IlceKodu, PostaKodu)` +
                    ` VALUES (${yeni_kullanici["BirimKodu"]}, "${yeni_kullanici["BirimAdi"]}", "${yeni_kullanici["BulunduguAdres"]}", ${yeni_kullanici["IlKodu"]}` +
                    `, "${yeni_kullanici["IlceKodu"]}", ${yeni_kullanici["PostaKodu"]} )`,
                    function (err, result) {
                        if (err) {
                            console.log(err);
                            res.send(err);
                        }
                        if (yeni_kullanici["UstBirimKodu"] != 0 && yeni_kullanici["UstBirimKodu"] != undefined) {
                            connection.query(`UPDATE Birimler SET UstBirimKodu = ${yeni_kullanici.UstBirimKodu} WHERE BirimKodu = ${yeni_kullanici.BirimKodu}`,
                                function (err, result) {
                                    if (err) {
                                        console.log(err);
                                        res.send(err);
                                    }
                                });
                        }
                        connection.query(`INSERT INTO Personel (KullaniciAdi, Email, Ad, Soyad, SicilNo, Cep, EvAdresi, IlKodu, IlceKodu, PostaKodu ,CalistigiBirimKodu)` +
                            ` VALUES ("${yeni_kullanici["KullaniciAdi"]}", "${yeni_kullanici["Email"]}", "${yeni_kullanici["Ad"]}","${yeni_kullanici["Soyad"]}", "${yeni_kullanici["SicilNo"]}", "${yeni_kullanici["Cep"]}","${yeni_kullanici["EvAdresi"]}", ${yeni_kullanici["IlKodu"]}, "${yeni_kullanici["IlceKodu"]}"` +
                            `,${yeni_kullanici["PostaKodu"]}, ${yeni_kullanici["CalistigiBirimKodu"]} )`,
                            function (err, result) {
                                if (err) {
                                    console.log(err);
                                    res.send(err);
                                }
                                if (yeni_kullanici["UstKullanici"] != null && yeni_kullanici["UstKullanici"] != undefined) {
                                    connection.query(`UPDATE Personel SET UstKullaniciAdi =  ${yeni_kullanici["UstKullaniciAdi"]} WHERE KullaniciAdi = "${yeni_kullanici["KullaniciAdi"]}"`,
                                        function (err, result) {
                                            if (err) {
                                                console.log(err);
                                                res.send(err);
                                            }
                                        });
                                }
                                connection.query(`UPDATE Birimler SET BirimMudurKullaniciAdi = "${yeni_kullanici["BirimMudurKullaniciAdi"]}" WHERE BirimKodu = ${yeni_kullanici["BirimKodu"]}`, function (err, result) {
                                    if (err) {
                                        console.log(err);
                                        res.send(err);
                                    }
                                });
                            }
                        );
                    }
                );
            }
        }
    );

    res.send(yeni_kullanici);
})

router.route("/kullanicilar/:kullanici_adi")
    .get(function (req, res) {
        const kullanici_adi = req.params.kullanici_adi;

        connection.query(`SELECT * FROM Kullanicilar WHERE KullaniciAdi = "${kullanici_adi}"`,
            async function (err, result) {
                if (result.length > 0) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    } else {
                        let kullanici = result[0];
                        let sifre = kullanici["Şifre"];
                        let cozumlu_sifre = await decryptPassword(sifre);
                        console.log("şifre" + cozumlu_sifre)

                        kullanici = { "Şifre": sifre, "Encrypted Şifre": cozumlu_sifre, ...kullanici }
                        console.log(kullanici);
                        res.json(kullanici);
                    }

                }
            });
    })
    .put(async function (req, res) {
        const yeni_kullanici = req.body;
        console.log(yeni_kullanici);
        const kullanici_adi = req.params.kullanici_adi;
        const isNewPass = yeni_kullanici["YeniŞifre"] != undefined;
        const yeni_sifre = await encryptPassword(yeni_kullanici["YeniŞifre"]);

        connection.query(`UPDATE Kullanicilar SET KullaniciAdi = "${yeni_kullanici.KullaniciAdi}"` +
            ` WHERE KullaniciAdi = "${kullanici_adi}"`,
            async function (err, result) {
                if (err) {
                    console.log(err);
                    return res.send(err);
                }
                else {
                    if (isNewPass) connection.query(`UPDATE Kullanicilar SET Şifre = "${yeni_sifre}" WHERE KullaniciAdi = "${kullanici_adi}"`);
                    let kullanici = yeni_kullanici;
                    let sifre = kullanici["Şifre"];
                    let cozumlu_sifre = await decryptPassword(sifre);

                    kullanici = { "Şifre": cozumlu_sifre, "Encrypted Şifre": sifre, ...kullanici }
                    res.send(kullanici);
                }
            });
    })
    .delete(function (req, res) {
        const kullanici_adi = req.params.kullanici_adi;

        connection.query(`DELETE FROM Kullanicilar WHERE KullaniciAdi = "${kullanici_adi}"`,
            function (err, result) {
                if (err) {
                    console.log(err);
                    res.send(err);
                }else{
                    const kullanici = result[0];
                    res.send(kullanici);
                }
            });
    });


router.route("/kullanicilar")
    .delete(function (req, res) {
        console.log("delete many");
        const kullanici_adlari = JSON.parse(req.query.filter).ids;

        for (var i = 0; i < kullanici_adlari.length; i++) {
            connection.query(`DELETE FROM Kullanicilar WHERE KullaniciAdi = "${kullanici_adlari[i]}"`,
                function (err, result) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    }
                });
        }
        res.send(kullanici_adlari);
    });

module.exports = router;