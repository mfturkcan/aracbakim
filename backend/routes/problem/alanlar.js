const router = require("express").Router();
const connection = require("../../config/database");


router.get("/alanlar", function (req, res) {
    connection.query(`SELECT * FROM Alanlar`,
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

router.post("/alanlar", async function (req, res) {
    const yeni_alan = req.body;
    let keys = Object.keys(yeni_alan);
    let values = Object.values(yeni_alan);

    connection.query(`INSERT INTO Alanlar (${keys.map(key => key)}) VALUES(${values.map(value => { if (typeof (value) == "string") return `"${value}"`; return value; })})`,
        function (err, result) {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                console.log(result);
                res.send(yeni_alan);
            }
        }
    );
});

router.route("/alanlar/:alan_id")
    .get(function (req, res) {
        const alan_id = req.params.alan_id;

        connection.query(`SELECT * FROM Alanlar WHERE AlanID = "${alan_id}"`,
            function (err, result) {
                if (result.length > 0) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    } else {
                        const alan = result[0];
                        res.send(alan);
                    }
                }
            });
    })
    .put(function (req, res) {
        const yeni_alan = req.body;
        const alan_id = req.params.alan_id;

        const columns = ["AlanID", "AlanAdi", "AlanTipi"];
        let update_values = [];

        for (var i = 0; i < columns.length; i++) {
            update_values.push({
                value: yeni_alan[columns[i]],
                column: columns[i],
            })
        }

        for (var j = 0; j < update_values.length; j++) {
            let value = update_values[j].column == "AlanTipi" ? (update_values[j].value) : `"${update_values[j].value}"`;
            connection.query(`UPDATE Alanlar SET ${update_values[j].column} = ${value} ` +
                ` WHERE AlanID = "${alan_id}"`,
                function (err, result) {
                    if (err) {
                        console.log(err);
                        return res.send(err);
                    }
                });
        }
        res.send(yeni_alan);

    })
    .delete(function (req, res) {
        const alan_id = req.params.alan_id;

        connection.query(`DELETE FROM Alanlar WHERE AlanID = "${alan_id}"`,
            function (err, result) {
                if (err) {
                    console.log(err);
                    res.send(err);
                } else {
                    const alan = result[0];
                    res.send(alan);
                }
            });
    });


router.route("/alanlar")
    .delete(function (req, res) {
        console.log("delete many");
        const alan_ids = JSON.parse(req.query.filter).ids;

        for (var i = 0; i < alan_ids.length; i++) {
            connection.query(`DELETE FROM Alanlar WHERE AlanID = "${alan_ids[i]}"`,
                function (err, result) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    }

                });
        }
        res.send(alan_ids);
    });


module.exports = router;