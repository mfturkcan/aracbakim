const router = require("express").Router();
const connection = require("../config/database");

// getList : /kullanicilar 
// getOne : /kullanicilar/id -ok
// getmany : /kullanicilar/ids - ok
// update - updatemany : put /kullanicilar/id -ids -ok
// delete - deletemany /id /ids -ok


router.get("/kullanicilar", function (req, res) {
    connection.query(`SELECT * FROM Kullanicilar`,
        function (err, result) {
            if (err) console.log(err);
            if (result.length > 0) {
                res.set('Content-Range', 'users 0-24/324');
                res.set('Access-Control-Expose-Headers', 'Content-Range');
                res.set('X-Total-Count', 10);
                console.log(result);
                res.send(result);
            }
            res.send(result);
        });
});

router.post("/kullanicilar", function (req, res) {

})

router.route("/kullanicilar/:kullanici_adi")
    .get(function (req, res) {
        console.log(req.params);
        const kullanici_adi = req.params.kullanici_adi;

        connection.query(`SELECT * FROM Kullanicilar WHERE KullaniciAdi = "${kullanici_adi}"`,
            function (err, result) {
                if (err) console.log(err);
                if (result.length > 0) {
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
                if (err) console.log(err);
                if (result.length > 0) {
                    const kullanici = result[0];
                    res.send(kullanici);
                }
            });
    })
    .delete(function (req, res) {
        const kullanici_adi = req.params.kullanici_adi;

        connection.query(`DELETE FROM Kullanicilar WHERE KullaniciAdi = "${kullanici_adi}"`,
            function (err, result) {
                if (err) console.log(err);
                if (result.length > 0) {
                    const kullanici = result[0];
                    res.send(kullanici);
                }
            });
    });


router.route("/kullanicilar/:kullanici_adlari")
    .get(function (req, res) {
        const kullanici_adlari = req.params.kullanici_adlari;

        for (var kullanici_adi in kullanici_adlari) {
            connection.query(`SELECT * FROM Kullanicilar WHERE KullaniciAdi = "${kullanici_adi}"`,
                function (err, result) {
                    if (err) console.log(err);
                    if (result.length > 0) {
                        const kullanici = result[0];
                        res.send(kullanici);
                    }
                });
        }
    })
    .delete(function (req, res) {
        const kullanici_adlari = req.params.kullanici_adlari;

        for (var kullanici_adi in kullanici_adlari) {
            connection.query(`DELETE FROM Kullanicilar WHERE KullaniciAdi = "${kullanici_adi}"`,
                function (err, result) {
                    if (err) console.log(err);
                    if (result.length > 0) {
                        const kullanici = result[0];
                        res.send(kullanici);
                    }
                });
        }
    });

module.exports = router;