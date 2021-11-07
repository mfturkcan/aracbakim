const router = require("express").Router();
const connection = require("../config/database");
// getList : /iller 
// getOne : /iller/id -ok
// getmany : /iller/ids - ok
// update - updatemany : put /iller/id -ids -ok
// delete - deletemany /id /ids -ok

router.get("/iller", function (req, res) {

    let sort = JSON.parse(req.query.sort);
    let type = "IlKodu";
    let order = "ASC";
    if (sort) {
        type = sort[0] == "id" ? "IlKodu" : sort[0];
        order = sort[1];
    }

    connection.query(`SELECT * FROM Iller ORDER BY ${type} ${order}`,
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

router.post("/iller", async function (req, res) {
    const yeni_il = req.body;

    connection.query(`INSERT INTO Iller (IlKodu, IlAdi) VALUES (${yeni_il})`,
        function (err, result) {
            if (err) {
                console.log(err);
            } else {
                console.log(result);
                res.send(yeni_il);
            }
        }
    );
});

router.route("/iller/:il_kodu")
    .get(function (req, res) {
        const il_kodu = req.params.il_kodu;

        connection.query(`SELECT * FROM Iller WHERE IlKodu = "${il_kodu}"`,
            function (err, result) {
                if (result.length > 0) {
                    if (err) console.log(err);
                    const il = result[0];
                    res.send(il);
                }
            });
    })
    .put(function (req, res) {
        const yeni_il = req.body;
        const il_kodu = req.params.il_kodu;

        const columns = ["IlKodu", "IlAdi"];
        let update_values = [];

        for (var i = 0; i < columns.length; i++) {
            update_values.push({
                value: yeni_il[columns[i]],
                column: columns[i],
            })
        }

        for (var j = 0; j < update_values.length; j++) {
            connection.query(`UPDATE Iller SET ${update_values[j].column} = "${update_values[j].value}" ` +
                ` WHERE IlKodu = "${il_kodu}"`,
                function (err, result) {
                    if (err) console.log(err);
                });
        }

        res.send(yeni_il);
    })
    .delete(function (req, res) {
        const il_kodu = req.params.il_kodu;

        connection.query(`DELETE FROM Iller WHERE IlKodu = "${il_kodu}"`,
            function (err, result) {
                if (result.length > 0) {
                    const il = result[0];
                    res.send(il);
                    if (err) console.log(err);
                }
            });
    });


router.route("/iller")
    .delete(function (req, res) {
        console.log("delete many");
        const il_kodlari = JSON.parse(req.query.filter).ids;

        for (var i = 0; i < il_kodlari.length; i++) {
            connection.query(`DELETE FROM Iller WHERE IlKodu = "${il_kodlari[i]}"`,
                function (err, result) {
                    if (err) console.log(err);
                });
        }
        res.send(il_kodlari);
    });


module.exports = router;