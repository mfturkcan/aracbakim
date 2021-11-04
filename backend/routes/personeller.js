const router = require("express").Router();
const connection = require("../config/database");
// getList : /iller 
// getOne : /iller/id -ok
// getmany : /iller/ids - ok
// update - updatemany : put /iller/id -ids -ok
// delete - deletemany /id /ids -ok

router.get("/personeller", function (req, res) {
    console.log("personel get");
    connection.query(`SELECT * FROM Personel`,
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

router.post("/personeller", async function (req, res) {
    const yeni_personel = req.body;

    connection.query(`INSERT INTO Personel (KullaniciAdi, Email, Ad, Soyad, SicilNo, Cep, EvAdresi, IlKodu, IlceKodu, PostaKodu, UstKullaniciAdi, CalistigiBirimKodu)` +
        ` VALUES ("${yeni_personel["KullaniciAdi"]}", "${yeni_personel["Email"]}", "${yeni_personel["Ad"]}","${yeni_personel["Soyad"]}", "${yeni_personel["SicilNo"]}", "${yeni_personel["Cep"]}","${yeni_personel["EvAdresi"]}", ${yeni_personel["IlKodu"]}, ${yeni_personel["IlceKodu"]}` +
        `,${yeni_personel["PostaKodu"]}, "${yeni_personel["UstKullaniciAdi"]}", ${yeni_personel["CalistigiBirimKodu"]} )`,
        function (err, result) {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                console.log(result);
                res.send(yeni_personel);
            }
        }
    );
});

router.route("/personeller/:kullanici_adi")
    .get(function (req, res) {
        const kullanici_adi = req.params.kullanici_adi;

        connection.query(`SELECT * FROM Personel WHERE KullaniciAdi = "${kullanici_adi}"`,
            function (err, result) {
                if (result.length > 0) {
                    if (err) console.log(err);
                    const personel = result[0];
                    res.send(personel);
                }
            });
    })
    .put(function (req, res) {
        const yeni_personel = req.body;
        const kullanici_adi = req.params.kullanici_adi;

        connection.query(`UPDATE Personel SET KullaniciAdi = "${yeni_personel["KullaniciAdi"]}", Email = "${yeni_personel["Email"]}", Ad = "${yeni_personel["Ad"]}",Soyad = "${yeni_personel["Soyad"]}", SicilNo = "${yeni_personel["SicilNo"]}", Cep = "${yeni_personel["Cep"]}", EvAdresi ="${yeni_personel["EvAdresi"]}", IlKodu = ${yeni_personel["IlKodu"]}, IlceKodu = ${yeni_personel["IlceKodu"]}` +
            `,PostaKodu = ${yeni_personel["PostaKodu"]}, UstKullaniciAdi = "${yeni_personel["UstKullaniciAdi"] ?? ""}", CalistigiBirimKodu = ${yeni_personel["CalistigiBirimKodu"]} ` +
            ` WHERE KullaniciAdi = "${kullanici_adi}"`,
            function (err, result) {
                if (result.length > 0) {
                    if (err) console.log(err);
                    const ilce = result[0];
                    res.send(ilce);
                }
            });
    })
    .delete(function (req, res) {
        const kullanici_adi = req.params.kullanici_adi;

        connection.query(`DELETE FROM Personel WHERE KullaniciAdi = "${kullanici_adi}"`,
            function (err, result) {
                if (result.length > 0) {
                    const personel = result[0];
                    res.send(personel);
                    if (err) console.log(err);
                }
            });
    });


router.route("/ilceler")
    .delete(function (req, res) {
        console.log("delete many");
        const kullanici_adlari = JSON.parse(req.query.filter).ids;

        for (var i = 0; i < kullanici_adlari.length; i++) {
            connection.query(`DELETE FROM Personel WHERE KullaniciAdi = "${kullanici_adlari[i]}"`,
                function (err, result) {
                    if (err) console.log(err);
                });
        }
        res.send(kullanici_adlari);
    });


module.exports = router;