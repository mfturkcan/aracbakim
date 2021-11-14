const router = require("express").Router();
const connection = require("../config/database");
// getList : /iller 
// getOne : /iller/id -ok
// getmany : /iller/ids - ok
// update - updatemany : put /iller/id -ids -ok
// delete - deletemany /id /ids -ok

router.get("/personel", function (req, res) {
    let sort = JSON.parse(req.query.sort);
    let type = "KullaniciAdi";
    let order = "ASC";
    if (sort) {
        type = sort[0] == "id" ? "KullaniciAdi" : sort[0];
        order = sort[1];
    }

    connection.query(`SELECT * FROM Personel ORDER BY ${type} ${order}`,
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

router.post("/personel", async function (req, res) {
    const yeni_personel = req.body;
    let keys = Object.keys(yeni_personel);
    let values = Object.values(yeni_personel);

    connection.query(`INSERT INTO Personel (${keys.map(key => key)}) VALUES(${values.map(value => { if (typeof (value) == "string") return `"${value}"`; return value; })})`,
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

router.route("/personel/:kullanici_adi")
    .get(function (req, res) {
        const kullanici_adi = req.params.kullanici_adi;

        connection.query(`SELECT * FROM Personel WHERE KullaniciAdi = "${kullanici_adi}"`,
            function (err, result) {
                if (err) {
                    console.log(err);
                    res.send(err);
                }
                else {
                    const personel = result[0];
                    res.send(personel);
                }
            });
    })
    .put(function (req, res) {
        const yeni_personel = req.body;
        const kullanici_adi = req.params.kullanici_adi;

        connection.query(`UPDATE Personel SET KullaniciAdi = "${yeni_personel["KullaniciAdi"]}", Email = "${yeni_personel["Email"]}", Ad = "${yeni_personel["Ad"]}",Soyad = "${yeni_personel["Soyad"]}", SicilNo = "${yeni_personel["SicilNo"]}", Cep = "${yeni_personel["Cep"]}", EvAdresi ="${yeni_personel["EvAdresi"]}", IlKodu = ${yeni_personel["IlKodu"]}, IlceKodu = ${yeni_personel["IlceKodu"]}` +
            `,PostaKodu = ${yeni_personel["PostaKodu"]}, UstKullaniciAdi = "${yeni_personel["UstKullaniciAdi"] ?? ""}", CalistigiBirimKodu = ${yeni_personel["CalistigiBirimKodu"] ?? 0} ` +
            ` WHERE KullaniciAdi = "${kullanici_adi}"`,
            function (err, result) {
                if (err) {
                    console.log(err);
                    res.send(err);
                }
                else {
                    const ilce = result[0];
                    res.send(ilce);
                }
            });
    })
    .delete(function (req, res) {
        const kullanici_adi = req.params.kullanici_adi;

        connection.query(`DELETE FROM Personel WHERE KullaniciAdi = "${kullanici_adi}"`,
            function (err, result) {

                if (err) {
                    console.log(err);
                    res.send(err);
                } else {
                    const personel = result[0];
                    res.send(personel);
                }
            });
    });


router.route("/personel")
    .delete(function (req, res) {
        console.log("delete many");
        const kullanici_adlari = JSON.parse(req.query.filter).ids;

        for (var i = 0; i < kullanici_adlari.length; i++) {
            connection.query(`DELETE FROM Personel WHERE KullaniciAdi = "${kullanici_adlari[i]}"`,
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