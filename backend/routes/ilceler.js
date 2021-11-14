const router = require("express").Router();
const connection = require("../config/database");
// getList : /iller 
// getOne : /iller/id -ok
// getmany : /iller/ids - ok
// update - updatemany : put /iller/id -ids -ok
// delete - deletemany /id /ids -ok

router.get("/ilceler", function (req, res) {
    console.log("ilceler get");
    connection.query(`SELECT * FROM Ilceler`,
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

router.post("/ilceler", async function (req, res) {
    const yeni_ilce = req.body;
    let keys = Object.keys(yeni_ilce);
    let values = Object.values(yeni_ilce);

    connection.query(`INSERT INTO Ilceler (${keys.map(key => key)}) VALUES(${values.map(value => { if (typeof (value) == "string") return `"${value}"`; return value; })})`,
        function (err, result) {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                console.log(result);
                res.send(yeni_ilce);
            }
        }
    );
});

router.route("/ilceler/:ilce_kodu")
    .get(function (req, res) {
        const ilce_kodu = req.params.ilce_kodu;

        connection.query(`SELECT * FROM Ilceler WHERE IlceKodu = "${ilce_kodu}"`,
            function (err, result) {
                if (result.length > 0) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    }
                    else {
                        const ilce = result[0];
                        res.send(ilce);
                    }
                }
            });
    })
    .put(function (req, res) {
        const yeni_ilce = req.body;
        const ilce_kodu = req.params.ilce_kodu;

        connection.query(`UPDATE Ilceler SET IlceKodu = "${yeni_ilce.IlceKodu}", IlceAdi = "${yeni_ilce.IlceAdi}" ` +
            ` WHERE IlceKodu = "${ilce_kodu}"`,
            function (err, result) {
                if (result.length > 0) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    }
                    else {
                        const ilce = result[0];
                        res.send(ilce);
                    }
                }
            });
    })
    .delete(function (req, res) {
        const ilce_kodu = req.params.ilce_kodu;

        connection.query(`DELETE FROM Iller WHERE IlKodu = "${ilce_kodu}"`,
            function (err, result) {
                if (result.length > 0) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    } else {
                        const ilce = result[0];
                        res.send(ilce);
                    }
                }
            });
    });


router.route("/ilceler")
    .delete(function (req, res) {
        console.log("delete many");
        const ilce_kodlari = JSON.parse(req.query.filter).ids;

        for (var i = 0; i < il_kodlari.length; i++) {
            connection.query(`DELETE FROM Ilceler WHERE IlceKodu = "${ilce_kodlari[i]}"`,
                function (err, result) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    }
                });
        }
        res.send(ilce_kodlari);
    });


module.exports = router;