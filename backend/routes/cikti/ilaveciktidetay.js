const router = require("express").Router();
const connection = require("../../config/database");

router.get("/ilaveciktidetay", function (req, res) {
    connection.query(`SELECT * FROM IlaveCiktiDetay`,
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

router.post("/ilaveciktidetay", async function (req, res) {
    const yeni_cikti = req.body;
    let keys = Object.keys(yeni_cikti);
    let values = Object.values(yeni_cikti);

    connection.query(`INSERT INTO IlaveCiktiDetay (${keys.map(key => key)}) VALUES(${values.map(value => { if (typeof (value) == "string") return `"${value}"`; return value; })})`,
        function (err, result) {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                console.log(result);
                res.send(yeni_cikti);
            }
        }
    );
});

router.route("/ilaveciktidetay/:belirtec_id")
    .get(function (req, res) {
        const belirtec_id = req.params.belirtec_id;

        connection.query(`SELECT * FROM ilaveciktidetay WHERE BelirtecID = "${belirtec_id}"`,
            function (err, result) {
                if (result.length > 0) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    }
                    else {
                        const cikti = result[0];
                        res.send(cikti);
                    }
                }
            });
    })
    .put(function (req, res) {
        const yeni_cikti = req.body;
        const belirtec_id = req.params.belirtec_id;

        const columns = ["AlanID", "SinifID", "MudahaleID", "BelirtecID", "Sira","ProblemID","EkleyenKullaniciAdi","EklenmeTarihi"];
        let update_values = [];

        for (var i = 0; i < columns.length; i++) {
            update_values.push({
                value: yeni_cikti[columns[i]],
                column: columns[i],
            })
        }

        for (var j = 0; j < update_values.length; j++) {
            connection.query(`UPDATE IlaveCiktiDetay SET ${update_values[j].column} = "${update_values[j].value}" ` +
                ` WHERE BelirtecID = "${belirtec_id}"`,
                function (err, result) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    }
                });
        }
        res.send(yeni_cikti);
    })
    .delete(function (req, res) {
        const belirtec_id = req.params.belirtec_id;

        connection.query(`DELETE FROM IlaveCiktiDetay WHERE BelirtecID = "${belirtec_id}"`,
            function (err, result) {
                if (err) {
                    console.log(err);
                    res.send(err);
                } else {
                    const cikti = result[0];
                    res.send(cikti);
                }
            });
    });


router.route("/ilaveciktidetay")
    .delete(function (req, res) {
        const belirtec_ids = JSON.parse(req.query.filter).ids;

        for (var i = 0; i < belirtec_ids.length; i++) {
            connection.query(`DELETE FROM IlaveCiktiDetay WHERE BelirtecID = "${belirtec_ids[i]}"`,
                function (err, result) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    }
                });
        }
        res.send(belirtec_ids);
    });


module.exports = router;