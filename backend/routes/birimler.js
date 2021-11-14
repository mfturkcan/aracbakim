const router = require("express").Router();
const connection = require("../config/database");
// getList : /iller 
// getOne : /iller/id -ok
// getmany : /iller/ids - ok
// update - updatemany : put /iller/id -ids -ok
// delete - deletemany /id /ids -ok

router.get("/birimler", function (req, res) {

    let sort = JSON.parse(req.query.sort);
    let type = "BirimKodu";
    let order = "ASC";
    if (sort) {
        type = sort[0] == "id" ? "BirimKodu" : sort[0];
        order = sort[1];
    }

    connection.query(`SELECT * FROM Birimler ORDER BY ${type} ${order}`,
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

router.post("/birimler", async function (req, res) {
    const yeni_birim = req.body;

    let keys = Object.keys(yeni_birim);
    let values = Object.values(yeni_birim);

    connection.query(`INSERT INTO Birimler (${keys.map(key => key)}) VALUES(${values.map(value => { if (typeof (value) == "string") return `"${value}"`; return value; })})`,
        function (err, result) {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                console.log(result);
                res.send(yeni_birim);
            }
        }
    );
});

router.route("/birimler/:birim_kodu")
    .get(function (req, res) {
        const birim_kodu = req.params.birim_kodu;

        connection.query(`SELECT * FROM Birimler WHERE BirimKodu = ${birim_kodu}`,
            function (err, result) {
                if (err) {
                    console.log(err);
                    res.send(err);
                }
                else {
                    const birim = result[0];
                    res.send(birim);
                }
            });
    })
    .put(function (req, res) {
        const yeni_birim = req.body;
        const birim_kodu = req.params.birim_kodu;

        connection.query(`UPDATE Birimler SET BirimKodu = ${yeni_birim["BirimKodu"]}, BirimAdi = "${yeni_birim["BirimAdi"]}", UstBirimKodu = ${yeni_birim["UstBirimKodu"] ?? 0}, BulunduguAdres = "${yeni_birim["BulunduguAdres"]}", IlKodu = ${yeni_birim["IlKodu"]} ` +
            `IlceKodu = ${yeni_birim["IlceKodu"]}, PostaKodu = ${yeni_birim["PostaKodu"]}, BirimMudurKullaniciAdi = "${yeni_birim["BirimMudurKullaniciAdi"]}" ` +
            ` WHERE BirimKodu = ${birim_kodu}`,
            function (err, result) {
                if (err) {
                    console.log(err);
                    res.send(err);
                }
                else {
                    const birim = result[0];
                    res.send(birim);
                }
            });
    })
    .delete(function (req, res) {
        const birim_kodu = req.params.birim_kodu;

        connection.query(`DELETE FROM Birimler WHERE BirimKodu = "${birim_kodu}"`,
            function (err, result) {
                if (err) {
                    console.log(err);
                    res.send(err);
                } else {
                    const birim = result[0];
                    res.send(birim);
                }
            });
    });


router.route("/birimler")
    .delete(function (req, res) {
        console.log("delete many");
        const birim_kodlari = JSON.parse(req.query.filter).ids;

        for (var i = 0; i < birim_kodlari.length; i++) {
            connection.query(`DELETE FROM Birimler WHERE BirimKodu = "${birim_kodlari[i]}"`,
                function (err, result) {
                    if (err) {
                        console.log(err);
                        res.send(err);
                    } else {
                        res.send(ilce_kodlari);
                    }
                });
        }

    });


module.exports = router;