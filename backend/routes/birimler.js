const router = require("express").Router();
const connection = require("../config/database");
// getList : /iller 
// getOne : /iller/id -ok
// getmany : /iller/ids - ok
// update - updatemany : put /iller/id -ids -ok
// delete - deletemany /id /ids -ok

router.get("/birimler", function (req, res) {
    console.log("birimler get");
    connection.query(`SELECT * FROM Birimler`,
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

    connection.query(`INSERT INTO Birimler (BirimKodu, BirimAdi,  ${yeni_birim["UstBirimKodu"] == undefined ? "" : "UstBirimKodu,"} BulunduguAdres, IlKodu, IlceKodu, PostaKodu, BirimMudurKullaniciAdi)` +
        ` VALUES (${yeni_birim["BirimKodu"]}, "${yeni_birim["BirimAdi"]}", ${yeni_birim["UstBirimKodu"] == undefined ? "" : "${ yeni_birim[\"UstBirimKodu\"]},"} "${yeni_birim["BulunduguAdres"]}", ${yeni_birim["IlKodu"]}` +
        `, ${yeni_birim["IlceKodu"]}, ${yeni_birim["PostaKodu"]}, "${yeni_birim["BirimMudurKullaniciAdi"]}" )`,
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
                if (err) console.log(err);
                const birim = result[0];
                res.send(birim);
            });
    })
    .put(function (req, res) {
        const yeni_birim = req.body;
        const birim_kodu = req.params.birim_kodu;

        connection.query(`UPDATE Birimler SET BirimKodu = ${yeni_birim["BirimKodu"]}, BirimAdi = "${yeni_birim["BirimAdi"]}", UstBirimKodu = ${yeni_birim["UstBirimKodu"] ?? 0}, BulunduguAdres = "${yeni_birim["BulunduguAdres"]}", IlKodu = ${yeni_birim["IlKodu"]} ` +
            `IlceKodu = ${yeni_birim["IlceKodu"]}, PostaKodu = ${yeni_birim["PostaKodu"]}, BirimMudurKullaniciAdi = "${yeni_birim["BirimMudurKullaniciAdi"]}" ` +
            ` WHERE BirimKodu = ${birim_kodu}`,
            function (err, result) {
                if (err) console.log(err);
                const birim = result[0];
                res.send(birim);
            });
    })
    .delete(function (req, res) {
        const birim_kodu = req.params.birim_kodu;

        connection.query(`DELETE FROM Birimler WHERE BirimKodu = "${birim_kodu}"`,
            function (err, result) {
                const birim = result[0];
                res.send(birim);
                if (err) console.log(err);
            });
    });


router.route("/birimler")
    .delete(function (req, res) {
        console.log("delete many");
        const birim_kodlari = JSON.parse(req.query.filter).ids;

        for (var i = 0; i < birim_kodlari.length; i++) {
            connection.query(`DELETE FROM Birimler WHERE BirimKodu = "${birim_kodlari[i]}"`,
                function (err, result) {
                    if (err) console.log(err);
                });
        }
        res.send(ilce_kodlari);
    });


module.exports = router;