const router = require("express").Router();
const connection = require("../../config/database");

router.get("/mudahale", function (req, res) {
    connection.query(`SELECT * FROM Mudahale`,
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

router.post("/mudahale", async function (req, res) {
    const yeni_mudahale = req.body;
    let keys = Object.keys(yeni_mudahale);
    let values = Object.values(yeni_mudahale);

    connection.query(`INSERT INTO Mudahale (${keys.map(key => key)}) VALUES(${values.map(value => { if (typeof (value) == "string") return `"${value}"`; return value; })})`,
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

router.route("/mudahale/:mudahale_id")
    .get(function (req, res) {
        const mudahale_id = req.params.mudahale_id;

        connection.query(`SELECT * FROM mudahale WHERE MudahaleID = "${mudahale_id}"`,
            function (err, result) {
                if (result.length > 0) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    }
                    else {
                        const mudahale = result[0];
                        res.send(mudahale);
                    }
                }
            });
    })
    .put(function (req, res) {
        const yeni_mudahale = req.body;
        const mudahale_id = req.params.mudahale_id;
        console.log(yeni_mudahale)
        const columns = ["AlanID", "SinifID", "MudahaleID", "MudahaleAdi"];
        let update_values = [];

        for (var i = 0; i < columns.length; i++) {
            update_values.push({
                value: yeni_mudahale[columns[i]],
                column: columns[i],
            })
        }

        for (var j = 0; j < update_values.length; j++) {
            connection.query(`UPDATE Mudahale SET ${update_values[j].column} = "${update_values[j].value}" ` +
                ` WHERE MudahaleID = "${mudahale_id}"`,
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
        const mudahale_id = req.params.mudahale_id;

        connection.query(`DELETE FROM Mudahale WHERE MudahaleID = "${mudahale_id}"`,
            function (err, result) {
                if (err) {
                    console.log(err);
                    res.send(err);
                } else {
                    const mudahale = result[0];
                    res.send(mudahale);
                }
            });
    });


router.route("/mudahale")
    .delete(function (req, res) {
        console.log("delete many");
        const mudahale_ids = JSON.parse(req.query.filter).ids;

        for (var i = 0; i < mudahale_ids.length; i++) {
            connection.query(`DELETE FROM Mudahale WHERE MudahaleID = "${mudahale_ids[i]}"`,
                function (err, result) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    }
                });
        }
        res.send(mudahale_ids);
    });


module.exports = router;