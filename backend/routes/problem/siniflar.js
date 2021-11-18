const router = require("express").Router();
const connection = require("../../config/database");

router.get("/siniflar", function (req, res) {
    console.log("siniflar get");
    connection.query(`SELECT * FROM Siniflar`,
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

router.post("/siniflar", async function (req, res) {
    const yeni_sinif = req.body;
    let keys = Object.keys(yeni_sinif);
    let values = Object.values(yeni_sinif);

    connection.query(`INSERT INTO Siniflar  (${keys.map(key => key)}) VALUES(${values.map(value => { if (typeof (value) == "string") return `"${value}"`; return value; })})`,
        function (err, result) {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                console.log(result);
                res.send(yeni_sinif);
            }
        }
    );
});

router.route("/siniflar/:sinif_id")
    .get(function (req, res) {
        const sinif_id = req.params.sinif_id;

        connection.query(`SELECT * FROM Siniflar WHERE SinifID = "${sinif_id}"`,
            function (err, result) {
                if (result.length > 0) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    }
                    else {
                        const sinif = result[0];
                        res.send(sinif);
                    }
                }
            });
    })
    .put(function (req, res) {
        const yeni_sinif = req.body;
        const sinif_id = req.params.sinif_id;

        const columns = ["SinifID", "SinifAdi", "AlanTipi"];
        let update_values = [];

        for (var i = 0; i < columns.length; i++) {
            update_values.push({
                value: yeni_sinif[columns[i]],
                column: columns[i],
            })
        }

        for (var j = 0; j < update_values.length; j++) {
            let value = update_values[j].column == "AlanTipi" ? (update_values[j].value) : `"${update_values[j].value}"`;

            connection.query(`UPDATE Siniflar SET ${update_values[j].column} = ${value} ` +
                ` WHERE SinifID = "${sinif_id}"`,
                function (err, result) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    }
                });
        }
        res.send(yeni_sinif);
    })
    .delete(function (req, res) {
        const sinif_id = req.params.sinif_id;

        connection.query(`DELETE FROM Siniflar WHERE SinifID = "${sinif_id}"`,
            function (err, result) {
                if (err) {
                    console.log(err);
                    res.send(err);
                } else {
                    const sinif = result[0];
                    res.send(sinif);
                }
            });
    });


router.route("/siniflar")
    .delete(function (req, res) {
        console.log("delete many");
        const sinif_ids = JSON.parse(req.query.filter).ids;

        for (var i = 0; i < sinif_ids.length; i++) {
            connection.query(`DELETE FROM Siniflar WHERE SinifID = "${sinif_ids[i]}"`,
                function (err, result) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    }
                });
        }
        res.send(sinif_ids);
    });


module.exports = router;