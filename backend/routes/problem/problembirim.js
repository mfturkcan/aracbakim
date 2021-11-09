const router = require("express").Router();
const connection = require("../../config/database");


router.get("/problembirim", function (req, res) {
    console.log("problembirim get");
    connection.query(`SELECT * FROM ProblemBirim`,
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

router.post("/problembirim", async function (req, res) {
    const yeni_problem_birim = req.body;
    let keys = Object.keys(yeni_problem_birim);
    let values = Object.values(yeni_problem_birim);

    connection.query(`INSERT INTO ProblemBirim (${keys.map(key => key)}) VALUES(${values.map(value => { if (typeof (value) == "string") return `"${value}"`; return value; })})`,
        function (err, result) {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                console.log(result);
                res.send(yeni_problem_birim);
            }
        }
    );
});

router.route("/problembirim/:problem_id")
    .get(function (req, res) {
        const problem_id = req.params.problem_id;

        connection.query(`SELECT * FROM ProblemBirim WHERE ProblemID = "${problem_id}"`,
            function (err, result) {
                if (result.length > 0) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    }
                    const il = result[0];
                    res.send(il);
                }
            });
    })
    .put(function (req, res) {
        const yeni_problem_birim = req.body;
        const problem_id = req.params.problem_id;

        const columns = ["ProblemID", "BirimID", "EşleşmeTarihi"];
        let update_values = [];

        for (var i = 0; i < columns.length; i++) {
            update_values.push({
                value: yeni_problem_birim[columns[i]],
                column: columns[i],
            })
        }

        for (var j = 0; j < update_values.length; j++) {
            connection.query(`UPDATE ProblemBirim SET ${update_values[j].column} = "${update_values[j].value}" ` +
                ` WHERE ProblemID = "${problem_id}"`,
                function (err, result) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    }
                });
        }

        res.send(yeni_problem_birim);
    })
    .delete(function (req, res) {
        const problem_id = req.params.problem_id;

        connection.query(`DELETE FROM ProblemBirim WHERE ProblemID = "${problem_id}"`,
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


router.route("/problembirim")
    .delete(function (req, res) {
        console.log("delete many");
        const problem_ids = JSON.parse(req.query.filter).ids;

        for (var i = 0; i < il_kodlari.length; i++) {
            connection.query(`DELETE FROM ProblemBirim WHERE ProblemID = "${problem_ids[i]}"`,
                function (err, result) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    }
                });
        }
        res.send(problem_ids);
    });


module.exports = router;