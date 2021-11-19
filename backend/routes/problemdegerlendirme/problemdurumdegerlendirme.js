const router = require("express").Router();
const {getList, create, getOnePk, updateOnePk, deleteOnePk, deleteManyPk} = require("../routeHandler");

const ids = ["ProblemID", "YeniProblemID"];
const seperate_mark = "~";

router.get("/problemdurumdegerlendirme", function (req, res) {
    return getList("ProblemID","problemdurumdegerlendirme",req,res);
});

router.post("/problemdurumdegerlendirme", async function (req, res) {
    return create("problemdurumdegerlendirme",req,res);
});

router.route("/problemdurumdegerlendirme/:problem_id")
    .get(function (req, res) {
        return getOnePk("problemdurumdegerlendirme",ids,"problem_id",seperate_mark,req,res);
    })
    .put(function (req, res) {
        return updateOnePk("problemdurumdegerlendirme",ids,"problem_id",["ProblemID", "YeniProblemID", "YeniProblemTanimi", "YeniHedef", "OncekiProblemSkoru", "TahminEdilenProblemSkoru", "DegerlendirmeTarihi", "DegerlendirenKullaniciAdi"],seperate_mark,req,res);

    })
    .delete(function (req, res) {
        return deleteOnePk("problemdurumdegerlendirme", ids, "problem_id",seperate_mark,req,res);
    });


router.route("/problemdurumdegerlendirme")
    .delete(function (req, res) {
        return deleteManyPk("problemdurumdegerlendirme",ids,seperate_mark,req,res);
    });


module.exports = router;