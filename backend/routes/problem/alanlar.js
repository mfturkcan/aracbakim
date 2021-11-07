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

    connection.query(`INSERT INTO Alanlar (AlanID, AlanAdi, AlanTipi) VALUES (${yeni_alan})`,
        function (err, result) {
            if (err) {
                console.log(err);
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
                    if (err) console.log(err);
                    const alan = result[0];
                    res.send(alan);
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
            connection.query(`UPDATE Alan SET ${update_values[j].column} = "${update_values[j].value}" ` +
                ` WHERE AlanID = "${alan_id}"`,
                function (err, result) {
                    if (err) console.log(err);
                });
        }

        res.send(yeni_alan);
    })
    .delete(function (req, res) {
        const alan_id = req.params.alan_id;

        connection.query(`DELETE FROM Alanlar WHERE AlanID = "${alan_id}"`,
            function (err, result) {
                if (result.length > 0) {
                    const alan = result[0];
                    res.send(alan);
                    if (err) console.log(err);
                }
            });
    });


router.route("/alanlar")
    .delete(function (req, res) {
        console.log("delete many");
        const alan_ids = JSON.parse(req.query.filter).ids;

        for (var i = 0; i < il_kodlari.length; i++) {
            connection.query(`DELETE FROM Alanlar WHERE AlanID = "${alan_ids[i]}"`,
                function (err, result) {
                    if (err) console.log(err);
                });
        }
        res.send(alan_ids);
    });


module.exports = router;