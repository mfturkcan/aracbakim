const router = require("express").Router();
const connection = require("../config/database");
// getList : /belirtecler 
// getOne : /belirtecler/id -ok
// getmany : /belirtecler/ids - ok
// update - updatemany : put /belirtecler/id -ids -ok
// delete - deletemany /id /ids -ok

router.get("/belirtecler", function (req, res) {
    console.log("belirtecler get");
    connection.query(`SELECT * FROM Belirtecler`,
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

router.post("/belirtecler", async function (req, res) {
    const yeni_belirtec = req.body;

    connection.query(`INSERT INTO Belirtecler (BelirtecID, IlAdi) VALUES (${yeni_belirtec})`,
        function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                res.send(yeni_belirtec);
            }
        }
    );
});

router.route("/belirtecler/:belirtec_id")
    .get(function (req, res) {
        const belirtec_id = req.params.belirtec_id;

        connection.query(`SELECT * FROM Belirtecler WHERE BelirtecID = "${belirtec_id}"`,
            function (err, result) {
                if (result.length > 0) {
                    if (err) console.log(err);
                    const il = result[0];
                    res.send(il);
                }
            });
    })
    .put(function (req, res) {
        const yeni_belirtec = req.body;
        const belirtec_id = req.params.belirtec_id;

        const columns = ["BelirtecID", "BelirtecTanimi"];
        let update_values = [];

        for (var i = 0; i < columns.length; i++) {
            update_values.push({
                value: yeni_belirtec[columns[i]],
                column: columns[i],
            })
        }

        for (var j = 0; j < update_values.length; j++) {
            connection.query(`UPDATE Belirtecler SET ${update_values[j].column} = "${update_values[j].value}" ` +
                ` WHERE BelirtecID = "${belirtec_id}"`,
                function (err, result) {
                    if (err) console.log(err);
                });
        }

        res.send(yeni_belirtec);
    })
    .delete(function (req, res) {
        const belirtec_id = req.params.belirtec_id;

        connection.query(`DELETE FROM Belirtecler WHERE BelirtecID = "${belirtec_id}"`,
            function (err, result) {
                if (result.length > 0) {
                    const il = result[0];
                    res.send(il);
                    if (err) console.log(err);
                }
            });
    });


router.route("/belirtecler")
    .delete(function (req, res) {
        console.log("delete many");
        const belirtec_ids = JSON.parse(req.query.filter).ids;

        for (var i = 0; i < il_kodlari.length; i++) {
            connection.query(`DELETE FROM Belirtecler WHERE BelirtecID = "${belirtec_ids[i]}"`,
                function (err, result) {
                    if (err) console.log(err);
                });
        }
        res.send(belirtec_ids);
    });


module.exports = router;