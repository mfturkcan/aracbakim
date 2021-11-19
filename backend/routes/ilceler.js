const router = require("express").Router();
const connection = require("../config/database");

router.get("/ilceler", function (req, res) {
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
        const ilce_kodu = req.params.ilce_kodu.split("!")[0];
        const il_kodu = req.params.ilce_kodu.split("!")[1];
        console.log(ilce_kodu)
        console.log("get one")

        connection.query(`SELECT * FROM Ilceler WHERE IlceKodu = "${ilce_kodu}" AND IlKodu = "${il_kodu}"`,
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
    .put(function (req, res) {
        const yeni_ilce = req.body;
        const ilce_kodu = req.params.ilce_kodu.split("!")[0];
        const il_kodu = req.params.ilce_kodu.split("!")[1];

        connection.query(`UPDATE Ilceler SET IlceKodu = "${yeni_ilce.IlceKodu}", IlKodu = "${yeni_ilce.IlKodu}", IlceAdi = "${yeni_ilce.IlceAdi}" ` +
            ` WHERE IlceKodu = "${ilce_kodu}" and IlKodu = "${il_kodu}"`,
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
        const ilce_kodu = req.params.ilce_kodu.split("!")[0];
        const il_kodu = req.params.ilce_kodu.split("!")[1];

        connection.query(`DELETE FROM Iller WHERE IlceKodu = "${ilce_kodu}" and IlKodu = "${il_kodu}"`,
            function (err, result) {
                if (err) {
                    console.log(err);
                    res.send(err);
                } else {
                    const ilce = result[0];
                    res.send(ilce);
                }
            });
    });


router.route("/ilceler")
    .delete(function (req, res) {
        console.log("delete many");
        const ilcekodlari = JSON.parse(req.query.filter).ids;

        for (var i = 0; i < ilcekodlari.length; i++) {
            let ilce_kodu = ilcekodlari[i].split("!")[0];
            let il_kodu = ilcekodlari[i].split("!")[1];
            connection.query(`DELETE FROM Ilceler WHERE IlceKodu = "${ilce_kodu}" and IlKodu = "${il_kodu}"`,
                function (err, result) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    }
                });
        }
        res.send(ilcekodlari);
    });


module.exports = router;