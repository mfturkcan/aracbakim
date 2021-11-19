const router = require("express").Router();
const {getList, create, getOnePk, updateOnePk, deleteOnePk, deleteManyPk} = require("../routeHandler");

const ids = ["ProblemID", "BelirtecID"];
const seperate_mark = "&&";

router.get("/problemciktidegerlendirme", function (req, res) {
    return getList("BelirtecID","ProblemCiktiDegerlendirme",req,res);
});

router.post("/problemciktidegerlendirme", async function (req, res) {
    return create("ProblemCiktiDegerlendirme",req,res);
});

router.route("/problemciktidegerlendirme/:belirtec_id")
    .get(function (req, res) {
        return getOnePk("ProblemCiktiDegerlendirme",ids,"belirtec_id",seperate_mark,req,res);
    })
    .put(function (req, res) {
        return updateOnePk("ProblemCiktiDegerlendirme",ids,"belirtec_id",["ProblemID", "BelirtecID", "Skor" , "SkorTarihi"],seperate_mark,req,res);

    })
    .delete(function (req, res) {
        return deleteOnePk("ProblemCiktiDegerlendirme", ids, "belirtec_id",seperate_mark,req,res);
    });


router.route("/problemciktidegerlendirme")
    .delete(function (req, res) {
        return deleteManyPk("ProblemCiktiDegerlendirme",ids,seperate_mark,req,res);
    });


module.exports = router;