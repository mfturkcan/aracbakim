const router = require("express").Router();
const {getList, create, getOne, updateOne, deleteOne,deleteMany} = require("../routeHandler");

router.get("/problemdurumdegerlendirme", function(req,res){
    return getList("ProblemID","ProblemDurumDegerlendirme", req, res);
});

router.post("/problemdurumdegerlendirme",  function (req, res) {
    return create("ProblemDurumDegerlendirme",req,res);
});

router.route("/problemdurumdegerlendirme/:problem_id")
    .get(function (req, res) {
        return getOne("ProblemDurumDegerlendirme","ProblemID","problem_id",req,res);
    })
    .put(function (req, res) {
        const columns = ["ProblemID", "YeniProblemID", "YeniProblemTanimi", "YeniHedef",
            "OncekiProblemSkoru", "TahminEdilenProblemSkoru", "DegerlendirmeTarihi",
            "DegerlendirenKullaniciAdi"];

        return updateOne("ProblemDurumDegerlendirme","ProblemID","problem_id",columns,req,res);
    })
    .delete(function (req, res) {
        return deleteOne("ProblemDurumDegerlendirme","ProblemID","problem_id",req,res);
    });


router.route("/problemdurumdegerlendirme")
    .delete(function (req, res) {
        return deleteMany("ProblemDurumDegerlendirme","ProblemID",req,res);
    });


module.exports = router;