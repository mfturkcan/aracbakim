const router = require("express").Router();
const {getList, create, getOnePk, updateOnePk, deleteOnePk, deleteManyPk} = require("../routeHandler");

const ids = ["ProblemID", "AlanID", "SinifID", "MudahaleID", "BelirtecID"];
const seperate_mark = "--";

router.get("/ilaveciktidetay", function (req, res) {
    return getList("BelirtecID","IlaveCiktiDetay",req,res);
});

router.post("/ilaveciktidetay", async function (req, res) {
    return create("IlaveCiktiDetay",req,res);
});

router.route("/ilaveciktidetay/:belirtec_id")
    .get(function (req, res) {
        return getOnePk("IlaveCiktiDetay",ids,"belirtec_id",seperate_mark,req,res);
    })
    .put(function (req, res) {
        return updateOnePk("IlaveCiktiDetay",ids,"belirtec_id",["ProblemID", "AlanID", "SinifID", "MudahaleID", "BelirtecID", "Sira", "EkleyenKullaniciAdi", "EklenmeTarihi"],seperate_mark,req,res);

    })
    .delete(function (req, res) {
        return deleteOnePk("IlaveCiktiDetay", ids, "belirtec_id",seperate_mark,req,res);
    });


router.route("/ilaveciktidetay")
    .delete(function (req, res) {
        return deleteManyPk("IlaveCiktiDetay",ids,seperate_mark,req,res);
    });


module.exports = router;