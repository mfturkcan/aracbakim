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

    connection.query(`INSERT INTO Mudahale (AlanID, SinifID, MudaheleID,  MudahaleAdi) VALUES (${yeni_mudahale} )`,
        function (err, result) {
            if (err) {
                console.log(err);
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
                    if (err) console.log(err);
                    const mudahale = result[0];
                    res.send(mudahale);
                }
            });
    })
    .put(function (req, res) {
        const yeni_mudahale = req.body;
        const mudahale_id = req.params.mudahale_id;

        const columns = ["AlanID", "SinifID", "MudaheleID", "MudahaleAdi"];
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
                    if (err) console.log(err);
                });
        }

        res.send(yeni_mudahale);
    })
    .delete(function (req, res) {
        const mudahale_id = req.params.mudahale_id;

        connection.query(`DELETE FROM Mudahale WHERE MudahaleID = "${mudahale_id}"`,
            function (err, result) {
                if (result.length > 0) {
                    const mudahale = result[0];
                    res.send(mudahale);
                    if (err) console.log(err);
                }
            });
    });


router.route("/mudahale")
    .delete(function (req, res) {
        console.log("delete many");
        const mudahale_ids = JSON.parse(req.query.filter).ids;

        for (var i = 0; i < il_kodlari.length; i++) {
            connection.query(`DELETE FROM Mudahale WHERE MudahaleID = "${mudahale_ids[i]}"`,
                function (err, result) {
                    if (err) console.log(err);
                });
        }
        res.send(mudahale_ids);
    });


module.exports = router;