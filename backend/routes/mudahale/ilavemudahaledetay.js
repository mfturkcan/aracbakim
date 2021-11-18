const router = require("express").Router();
const connection = require("../../config/database");

router.get("/ilavemudahaledetay", function (req, res) {
    connection.query(`SELECT * FROM IlaveMudahaleDetay`,
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

router.post("/ilavemudahaledetay", async function (req, res) {
    const yeni_mudahale = req.body;
    let keys = Object.keys(yeni_mudahale);
    let values = Object.values(yeni_mudahale);

    connection.query(`INSERT INTO IlaveMudahaleDetay (${keys.map(key => key)}) VALUES(${values.map(value => { if (typeof (value) == "string") return `"${value}"`; return value; })})`,
        function (err, result) {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                console.log(result);
                res.send(yeni_mudahale);
            }
        }
    );
});

router.route("/ilavemudahaledetay/:aktivite_id")
    .get(function (req, res) {
        const aktivite_id = req.params.aktivite_id;

        connection.query(`SELECT * FROM ilavemudahaledetay WHERE AktiviteID = "${aktivite_id}"`,
            function (err, result) {
                if (result.length > 0) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    }
                    else {
                        const mudahaledetay = result[0];
                        res.send(mudahaledetay);
                    }
                }
            });
    })
    .put(function (req, res) {
        const yeni_mudahale = req.body;
        const aktivite_id = req.params.aktivite_id;

        const columns = ["AlanID", "SinifID", "MudahaleID", "AktiviteID", "Sira","ProblemID","EkleyenKullaniciAdi","EklenmeTarihi"];
        let update_values = [];

        for (var i = 0; i < columns.length; i++) {
            update_values.push({
                value: yeni_mudahale[columns[i]],
                column: columns[i],
            })
        }

        for (var j = 0; j < update_values.length; j++) {
            connection.query(`UPDATE IlaveMudahaleDetay SET ${update_values[j].column} = "${update_values[j].value}" ` +
                ` WHERE AktiviteID = "${aktivite_id}"`,
                function (err, result) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    }
                });
        }
        res.send(yeni_mudahale);
    })
    .delete(function (req, res) {
        const aktivite_id = req.params.aktivite_id;

        connection.query(`DELETE FROM IlaveMudahaleDetay WHERE AktiviteID = "${aktivite_id}"`,
            function (err, result) {
                if (err) {
                    console.log(err);
                    res.send(err);
                } else {
                    const mudahaledetay = result[0];
                    res.send(mudahaledetay);
                }
            });
    });


router.route("/ilavemudahaledetay")
    .delete(function (req, res) {
        const aktivite_ids = JSON.parse(req.query.filter).ids;

        for (var i = 0; i < aktivite_ids.length; i++) {
            connection.query(`DELETE FROM IlaveMudahaleDetay WHERE AktiviteID = "${aktivite_ids[i]}"`,
                function (err, result) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    }
                });
        }
        res.send(aktivite_ids);
    });


module.exports = router;