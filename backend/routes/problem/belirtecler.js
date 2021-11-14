const router = require("express").Router();
const connection = require("../../config/database");


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
    let keys = Object.keys(yeni_belirtec);
    let values = Object.values(yeni_belirtec);

    connection.query(`INSERT INTO Belirtecler (${keys.map(key => key)}) VALUES(${values.map(value => { if (typeof (value) == "string") return `"${value}"`; return value; })})`,
        function (err, result) {
            if (err) {
                console.log(err);
                res.send(err);
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
                    if (err) {
                        console.log(err);
                        res.send(err);
                    } else {
                        const il = result[0];
                        res.send(il);
                    }
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
                    if (err) {
                        console.log(err);
                        res.send(err);
                    } else {
                        res.send(yeni_belirtec);
                    }
                });
        }


    })
    .delete(function (req, res) {
        const belirtec_id = req.params.belirtec_id;

        connection.query(`DELETE FROM Belirtecler WHERE BelirtecID = "${belirtec_id}"`,
            function (err, result) {
                if (result.length > 0) {
                    const il = result[0];
                    res.send(il);
                    if (err) {
                        console.log(err);
                        res.send(err);
                    }
                }
            });
    });


router.route("/belirtecler")
    .delete(function (req, res) {
        console.log("delete many");
        const belirtec_ids = JSON.parse(req.query.filter).ids;

        for (var i = 0; i < belirtec_ids.length; i++) {
            connection.query(`DELETE FROM Belirtecler WHERE BelirtecID = "${belirtec_ids[i]}"`,
                function (err, result) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    } else {
                        res.send(belirtec_ids);
                    }
                });
        }
    });


module.exports = router;