const router = require("express").Router();
const connection = require("../config/database");
const encryptPassword = require("../lib/password").encryptPassword;


router.get("/kullanicilar", function (req, res) {
    console.log("get kullanicilar");
    connection.query(`SELECT * FROM Kullanicilar`,
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

    connection.query(`INSERT INTO Kullanicilar (KullaniciAdi, Şifre, KullaniciRolu) VALUES ("${yeni_kullanici["KullaniciAdi"]}", "${encrypted_sifre}", ${yeni_kullanici["KullaniciRolu"]} )`,
        function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                res.send(yeni_kullanici);
            }
        }
    );
})

router.route("/kullanicilar/:kullanici_adi")
    .get(function (req, res) {
        console.log(req.params);
        const kullanici_adi = req.params.kullanici_adi;

        connection.query(`SELECT * FROM Kullanicilar WHERE KullaniciAdi = "${kullanici_adi}"`,
            function (err, result) {
                if (result.length > 0) {
                    if (err) console.log(err);
                    const kullanici = result[0];
                    res.send(kullanici);
                }
            });
    })
    .put(function (req, res) {
        const yeni_kullanici = req.body;
        const kullanici_adi = req.params.kullanici_adi;

        connection.query(`UPDATE Kullanicilar SET KullaniciAdi = "${yeni_kullanici.KullaniciAdi}", KullaniciRolu = "${yeni_kullanici.kullanici_rolu}" ` +
            ` WHERE KullaniciAdi = "${kullanici_adi}"`,
            function (err, result) {
                if (result.length > 0) {
                    if (err) console.log(err);
                    const kullanici = result[0];
                    res.send(kullanici);
                }
            });
    })
    .delete(function (req, res) {
        const kullanici_adi = req.params.kullanici_adi;

        connection.query(`DELETE FROM Kullanicilar WHERE KullaniciAdi = "${kullanici_adi}"`,
            function (err, result) {
                if (result.length > 0) {
                    const kullanici = result[0];
                    res.send(kullanici);
                    if (err) console.log(err);
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
                    if (err) console.log(err);
                });
        }
        res.send(kullanici_adlari);
    });

module.exports = router;