const router = require("express").Router();
const {getList, create, getOnePk, updateOnePk, deleteOnePk, deleteManyPk} = require("../routeHandler");

const ids = ["ProblemID", "AlanID", "SinifID", "MudahaleID", "AktiviteID"];
const seperate_mark = "=";

router.get("/ilavemudahaledetay", function (req, res) {
    return getList("MudahaleID","IlaveMudahaleDetay",req,res);
});

router.post("/ilavemudahaledetay", async function (req, res) {
    return create("IlaveMudahaleDetay",req,res);
});

router.route("/ilavemudahaledetay/:mudahale_id")
    .get(function (req, res) {
        return getOnePk("IlaveMudahaleDetay",ids,"mudahale_id",seperate_mark,req,res);
    })
    .put(function (req, res) {
        return updateOnePk("IlaveMudahaleDetay",ids,"mudahale_id",["ProblemID", "AlanID", "SinifID", "MudahaleID", "AktiviteID", "Sira", "EkleyenKullaniciAdi", "EklenmeTarihi"],seperate_mark,req,res);

    })
    .delete(function (req, res) {
        return deleteOnePk("IlaveMudahaleDetay", ids, "mudahale_id",seperate_mark,req,res);
    });


router.route("/ilavemudahaledetay")
    .delete(function (req, res) {
        return deleteManyPk("IlaveMudahaleDetay",ids,seperate_mark,req,res);
    });


module.exports = router;