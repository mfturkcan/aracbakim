const router = require("express").Router();
const {getList, create, getOnePk, updateOnePk, deleteOnePk, deleteManyPk} = require("../routeHandler");

const ids = ["AlanID", "SinifID", "CiktiID", "ProblemID"];
const seperate_mark = "*";

router.get("/problemcikti", function (req, res) {
    return getList("CiktiID","ProblemCikti",req,res);
});

router.post("/problemcikti", async function (req, res) {
    console.log(req.body)
    return create("ProblemCikti",req,res);
});

router.route("/problemcikti/:cikti_id")
    .get(function (req, res) {
        return getOnePk("ProblemCikti",ids,"cikti_id",seperate_mark,req,res);
    })
    .put(function (req, res) {
        return updateOnePk("ProblemCikti",ids,"cikti_id",["AlanID", "SinifID", "CiktiID", "ProblemID"],seperate_mark,req,res);

    })
    .delete(function (req, res) {
        return deleteOnePk("ProblemCikti", ids, "cikti_id",seperate_mark,req,res);
    });


router.route("/problemcikti")
    .delete(function (req, res) {
        return deleteManyPk("ProblemCikti",ids,seperate_mark,req,res);
    });


module.exports = router;