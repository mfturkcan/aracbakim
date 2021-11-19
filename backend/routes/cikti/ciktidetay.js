const router = require("express").Router();
const connection = require("../../config/database");


router.get("/ciktidetay", function (req, res) {
    console.log("ciktidetay get");
    connection.query(`SELECT * FROM CiktiDetay`,
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

router.post("/ciktidetay", async function (req, res) {
    const yeni_cikti = req.body;
    let keys = Object.keys(yeni_cikti);
    let values = Object.values(yeni_cikti);

    connection.query(`INSERT INTO CiktiDetay (${keys.map(key => key)}) VALUES(${values.map(value => { if (typeof (value) == "string") return `"${value}"`; return value; })})`,
        function (err, result) {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                console.log(result);
                res.send(yeni_cikti);
            }
        }
    );
});

router.route("/ciktidetay/:cikti_id")
    .get(function (req, res) {
        console.log(req.params.cikti_id)
        const cikti_id = req.params.cikti_id.split("_")[1];
        const alan_id = req.params.cikti_id.split("_")[0];
        const sinif_id = req.params.cikti_id.split("_")[2];
        const belirtec_id = req.params.cikti_id.split("_")[3];
        const sira = req.params.cikti_id.split("_")[4];

        connection.query(`SELECT * FROM CiktiDetay WHERE CiktiID = "${cikti_id}" AND AlanID = "${alan_id}" AND SinifID = "${sinif_id}" AND BelirtecID = "${belirtec_id}" AND Sira = "${sira}"`,
            function (err, result) {
                if (result.length > 0) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    }
                    else {
                        const il = result[0];
                        res.send(il);
                    }
                }
            });
    })
    .put(function (req, res) {
        console.log(req.params.cikti_id)
        const yeni_cikti = req.body;
        const cikti_id = req.params.cikti_id.split("_")[1];
        const alan_id = req.params.cikti_id.split("_")[0];
        const sinif_id = req.params.cikti_id.split("_")[2];
        const belirtec_id = req.params.cikti_id.split("_")[3];
        const sira = req.params.cikti_id.split("_")[4];

        const columns = ["AlanID", "SinifID", "CiktiID", "BelirtecID", "Sira"];
        let update_values = [];

        for (var i = 0; i < columns.length; i++) {
            update_values.push({
                value: yeni_cikti[columns[i]],
                column: columns[i],
            })
        }

        for (var j = 0; j < update_values.length; j++) {
            connection.query(`UPDATE CiktiDetay SET ${update_values[j].column} = "${update_values[j].value}" ` +
                ` WHERE CiktiID = "${cikti_id}" AND AlanID = "${alan_id}" AND SinifID = "${sinif_id}" AND BelirtecID = "${belirtec_id}" AND Sira = "${sira}"`,
                function (err, result) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    }
                });
        }
        res.send(yeni_cikti);
    })
    .delete(function (req, res) {
        const cikti_id = req.params.cikti_id.split("_")[1];
        const alan_id = req.params.cikti_id.split("_")[0];
        const sinif_id = req.params.cikti_id.split("_")[2];
        const belirtec_id = req.params.cikti_id.split("_")[3];
        const sira = req.params.cikti_id.split("_")[4];

        connection.query(`DELETE FROM CiktiDetay WHERE CiktiID = "${cikti_id}" AND AlanID = "${alan_id}" AND SinifID = "${sinif_id}" AND BelirtecID = "${belirtec_id}" AND Sira = "${sira}"`,
            function (err, result) {
                if (err) {
                    console.log(err);
                    res.send(err);
                } else {
                    const il = result[0];
                    res.send(il);
                }
            });
    });


router.route("/ciktidetay")
    .delete(function (req, res) {
        console.log("delete many");
        const cikti_ids = JSON.parse(req.query.filter).ids;

        for (var i = 0; i < cikti_ids.length; i++) {
            let cikti_id = cikti_ids[i].split("_")[1];
            let alan_id = cikti_ids[i].split("_")[0];
            let sinif_id = cikti_ids[i].split("_")[2];
            let belirtec_id = cikti_ids[i].split("_")[3];
            let sira = cikti_ids[i].split("_")[4];
            connection.query(`DELETE FROM CiktiDetay WHERE CiktiID = "${cikti_id}" AND AlanID = "${alan_id}" AND SinifID = "${sinif_id}" AND BelirtecID = "${belirtec_id}" AND Sira = "${sira}"`,
                function (err, result) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    }
                });
        }
        res.send(cikti_ids);
    });


module.exports = router;