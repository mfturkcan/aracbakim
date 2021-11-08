const router = require("express").Router();
const connection = require("../../config/database");

router.get("/problem", function (req, res) {
    console.log("iller get");
    connection.query(`SELECT * FROM Problem`,
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

router.post("/problem", async function (req, res) {
    const yeni_problem = req.body;
    let keys = Object.keys(yeni_problem);
    let values = Object.values(yeni_problem);

    connection.query(`INSERT INTO Problem  (${keys.map(key => key)}) VALUES(${values.map(value => { if (typeof (value) == "string") return `"${value}"`; return value; })})`,
        function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                res.send(yeni_problem);
            }
        }
    );
});

router.route("/problem/:problem_id")
    .get(function (req, res) {
        const problem_id = req.params.problem_id;

        connection.query(`SELECT * FROM Problem WHERE ProblemID = "${problem_id}"`,
            function (err, result) {
                if (result.length > 0) {
                    if (err) console.log(err);
                    const problem = result[0];
                    res.send(problem);
                }
            });
    })
    .put(function (req, res) {
        const yeni_problem = req.body;
        const problem_id = req.params.problem_id;

        var columns = ["ProblemTipiID", "ProblemTanimi", "ProblemiTanimlayiciAdi", "ProblemiTanimlayiciSoyadi", "ProblemiTanimlayanTCNOPasaportno", "HedeflenenAmacTanimi"];
        var update_values = [];

        for (var i = 0; i < columns.length; i++) {
            update_values.push({
                value: yeni_problem[columns[i]],
                column: columns[i],
            })
        }

        for (var j = 0; j < update_values.length; j++) {
            connection.query(`UPDATE Problem SET ${update_values[j].column} = ${update_values[j].value} ` +
                ` WHERE IlKodu = "${problem_id}"`,
                function (err, result) {
                    if (result.length > 0) {
                        if (err) console.log(err);
                    }
                });
        }

        res.send(yeni_problem);
    })
    .delete(function (req, res) {
        const problem_id = req.params.problem_id;

        connection.query(`DELETE FROM Problem WHERE ProblemID = "${problem_id}"`,
            function (err, result) {
                const problem = result[0];
                res.send(problem);
                if (err) console.log(err);
            });
    });


router.route("/problem")
    .delete(function (req, res) {
        console.log("delete many");
        const problem_ids = JSON.parse(req.query.filter).ids;

        for (var i = 0; i < problem_ids.length; i++) {
            connection.query(`DELETE FROM Problem WHERE ProblemID = "${problem_ids[i]}"`,
                function (err, result) {
                    if (err) console.log(err);
                });
        }
        res.send(problem_ids);
    });


module.exports = router;