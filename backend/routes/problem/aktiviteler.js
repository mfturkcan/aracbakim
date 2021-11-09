const router = require("express").Router();
const connection = require("../../config/database");


router.get("/aktiviteler", function (req, res) {
    console.log("aktiviteler get");
    connection.query(`SELECT * FROM Aktiviteler`,
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

router.post("/aktiviteler", async function (req, res) {
    const yeni_aktivite = req.body;
    let keys = Object.keys(yeni_aktivite);
    let values = Object.values(yeni_aktivite);

    connection.query(`INSERT INTO Aktiviteler (${keys.map(key => key)}) VALUES(${values.map(value => { if (typeof (value) == "string") return `"${value}"`; return value; })})`,
        function (err, result) {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                console.log(result);
                res.send(yeni_aktivite);
            }
        }
    );
});

router.route("/aktiviteler/:aktivite_id")
    .get(function (req, res) {
        const aktivite_id = req.params.aktivite_id;

        connection.query(`SELECT * FROM Aktiviteler WHERE AktiviteID = "${aktivite_id}"`,
            function (err, result) {
                if (result.length > 0) {
                    if (err) { console.log(err); res.send(err); }
                    const aktivite = result[0];
                    res.send(aktivite);
                }
            });
    })
    .put(function (req, res) {
        const yeni_aktivite = req.body;
        const aktivite_id = req.params.aktivite_id;

        const columns = ["AktiviteID", "AktiviteTanimi"];
        let update_values = [];

        for (var i = 0; i < columns.length; i++) {
            update_values.push({
                value: yeni_aktivite[columns[i]],
                column: columns[i],
            })
        }

        for (var j = 0; j < update_values.length; j++) {
            connection.query(`UPDATE Aktiviteler SET ${update_values[j].column} = "${update_values[j].value}" ` +
                ` WHERE AktiviteID = "${aktivite_id}"`,
                function (err, result) {
                    if (err) { console.log(err); res.send(err); }
                });
        }

        res.send(yeni_aktivite);
    })
    .delete(function (req, res) {
        const aktivite_id = req.params.aktivite_id;

        connection.query(`DELETE FROM Aktiviteler WHERE AktiviteID = "${aktivite_id}"`,
            function (err, result) {
                if (result.length > 0) {
                    const aktivite = result[0];
                    res.send(aktivite);
                    if (err) { console.log(err); res.send(err); }
                }
            });
    });


router.route("/aktiviteler")
    .delete(function (req, res) {
        console.log("delete many");
        const aktivite_ids = JSON.parse(req.query.filter).ids;

        for (var i = 0; i < aktivite_ids.length; i++) {
            connection.query(`DELETE FROM Aktiviteler WHERE AktiviteID = "${aktivite_ids[i]}"`,
                function (err, result) {
                    if (err) { console.log(err); res.send(err); }
                });
        }
        res.send(aktivite_ids);
    });


module.exports = router;