const router = require("express").Router();
const {getList, create, getOne, updateOne, deleteOne,deleteMany} = require("../routeHandler");

router.get("/problemciktidegerlendirme", function(req,res){
    return getList("BelirtecID","ProblemCiktiDegerlendirme", req, res);
});

router.post("/problemciktidegerlendirme",  function (req, res) {
    return create("ProblemCiktiDegerlendirme",req,res);
});

router.route("/problemciktidegerlendirme/:belirtec_id")
    .get(function (req, res) {
        return getOne("ProblemCiktiDegerlendirme","BelirtecID","belirtec_id",req,res);
    })
    .put(function (req, res) {
        const columns = ["BelirtecID","ProblemID", "Skor", "SkorTarihi"];

        return updateOne("ProblemCiktiDegerlendirme","BelirtecID","belirtec_id",columns,req,res);
    })
    .delete(function (req, res) {
        return deleteOne("ProblemCiktiDegerlendirme","BelirtecID","belirtec_id",req,res);
    });


router.route("/problemciktidegerlendirme")
    .delete(function (req, res) {
        return deleteMany("ProblemCiktiDegerlendirme","BelirtecID",req,res);
    });


module.exports = router;