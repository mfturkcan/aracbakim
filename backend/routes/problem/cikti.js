const router = require("express").Router();
const connection = require("../../config/database");

router.get("/cikti", function (req, res) {
    console.log("cikti get");
    connection.query(`SELECT * FROM Cikti`,
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

router.post("/cikti", async function (req, res) {
    const yeni_cikti = req.body;

    connection.query(`INSERT INTO Cikti (CiktiID, IlAdi) VALUES (${yeni_cikti} )`,
        function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                res.send(yeni_cikti);
            }
        }
    );
});

router.route("/cikti/:cikti_id")
    .get(function (req, res) {
        const cikti_id = req.params.cikti_id;

        connection.query(`SELECT * FROM Cikti WHERE CiktiID = "${cikti_id}"`,
            function (err, result) {
                if (result.length > 0) {
                    if (err) console.log(err);
                    const cikti = result[0];
                    res.send(cikti);
                }
            });
    })
    .put(function (req, res) {
        const yeni_cikti = req.body;
        const cikti_id = req.params.cikti_id;

        const columns = ["AlanID", "SinifID", "CiktiID", "CiktiAdi"];
        let update_values = [];

        for (var i = 0; i < columns.length; i++) {
            update_values.push({
                value: yeni_cikti[columns[i]],
                column: columns[i],
            })
        }

        for (var j = 0; j < update_values.length; j++) {
            connection.query(`UPDATE Cikti SET ${update_values[j].column} = "${update_values[j].value}" ` +
                ` WHERE CiktiID = "${cikti_id}"`,
                function (err, result) {
                    if (err) console.log(err);
                });
        }

        res.send(yeni_cikti);
    })
    .delete(function (req, res) {
        const cikti_id = req.params.cikti_id;

        connection.query(`DELETE FROM Cikti WHERE CiktiID = "${cikti_id}"`,
            function (err, result) {
                if (result.length > 0) {
                    const cikti = result[0];
                    res.send(cikti);
                    if (err) console.log(err);
                }
            });
    });


router.route("/cikti")
    .delete(function (req, res) {
        console.log("delete many");
        const cikti_ids = JSON.parse(req.query.filter).ids;

        for (var i = 0; i < il_kodlari.length; i++) {
            connection.query(`DELETE FROM Cikti WHERE CiktiID = "${cikti_ids[i]}"`,
                function (err, result) {
                    if (err) console.log(err);
                });
        }
        res.send(cikti_ids);
    });


module.exports = router;