const router = require("express").Router();
const connection = require("../../config/database");
const Console = require("console");

router.get("/mudahaledetay", function (req, res) {
    connection.query(`SELECT * FROM MudahaleDetay`,
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

router.post("/mudahaledetay", async function (req, res) {
    const yeni_mudahale = req.body;
    let keys = Object.keys(yeni_mudahale);
    let values = Object.values(yeni_mudahale);

    connection.query(`INSERT INTO MudahaleDetay (${keys.map(key => key)}) VALUES(${values.map(value => { if (typeof (value) == "string") return `"${value}"`; return value; })})`,
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

router.route("/mudahaledetay/:aktivite_id")
    .get(function (req, res) {
        console.log(req.params.aktivite_id)
        const aktivite_id = req.params.aktivite_id.split(",")[3];
        const mudahale_id = req.params.aktivite_id.split(",")[1];
        const alan_id = req.params.aktivite_id.split(",")[0];
        const sinif_id = req.params.aktivite_id.split(",")[2];

        console.log(mudahale_id)

        connection.query(`SELECT * FROM mudahaledetay WHERE MudahaleID = "${mudahale_id}" AND AlanID = "${alan_id}" AND SinifID = "${sinif_id}" AND AktiviteID = "${aktivite_id}"`,
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
        const aktivite_id = req.params.aktivite_id.split(",")[3];
        const mudahale_id = req.params.aktivite_id.split(",")[1];
        const alan_id = req.params.aktivite_id.split(",")[0];
        const sinif_id = req.params.aktivite_id.split(",")[2];

        const columns = ["AlanID", "SinifID", "MudahaleID", "AktiviteID", "Sira"];
        let update_values = [];

        for (var i = 0; i < columns.length; i++) {
            update_values.push({
                value: yeni_mudahale[columns[i]],
                column: columns[i],
            })
        }

        for (var j = 0; j < update_values.length; j++) {
            connection.query(`UPDATE MudahaleDetay SET ${update_values[j].column} = "${update_values[j].value}" ` +
                ` WHERE MudahaleID = "${mudahale_id}" AND AlanID = "${alan_id}" AND SinifID = "${sinif_id}" AND AktiviteID = "${aktivite_id}"`,
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
        const aktivite_id = req.params.aktivite_id.split(",")[3];
        const mudahale_id = req.params.aktivite_id.split(",")[1];
        const alan_id = req.params.aktivite_id.split(",")[0];
        const sinif_id = req.params.aktivite_id.split(",")[2];

        connection.query(`DELETE FROM MudahaleDetay WHERE MudahaleID = "${mudahale_id}" AND AlanID = "${alan_id}" AND SinifID = "${sinif_id}" AND AktiviteID = "${aktivite_id}"`,
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


router.route("/mudahaledetay")
    .delete(function (req, res) {
        console.log("delete many");
        const aktivite_ids = JSON.parse(req.query.filter).ids;

        for (var i = 0; i < aktivite_ids.length; i++) {

            let aktivite_id = aktivite_ids[i].split(",")[3];
            let mudahale_id = aktivite_ids[i].split(",")[1];
            let alan_id = aktivite_ids[i].split(",")[0];
            let sinif_id = aktivite_ids[i].split(",")[2];
            connection.query(`DELETE FROM MudahaleDetay WHERE MudahaleID = "${mudahale_id}" AND AlanID = "${alan_id}" AND SinifID = "${sinif_id}" AND AktiviteID = "${aktivite_id}"`,
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