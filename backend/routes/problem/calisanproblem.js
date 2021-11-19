const router = require("express").Router();
const {getList, create, getOnePk, updateOnePk, deleteOnePk, deleteManyPk} = require("../routeHandler");

const ids = ["ProblemID", "KullaniciAdi", "AlanID", "SinifID", "MudahaleID", "AktiviteID", "Tarihi"];
const seperate_mark = "~~";

router.get("/calisanproblem", function (req, res) {
    return getList("ProblemID","calisanproblem",req,res);
});

router.post("/calisanproblem", async function (req, res) {
    return create("calisanproblem",req,res);
});

router.route("/calisanproblem/:problem_id")
    .get(function (req, res) {
        return getOnePk("calisanproblem",ids,"problem_id",seperate_mark,req,res);
    })
    .put(function (req, res) {
        return updateOnePk("calisanproblem",ids,"problem_id",["ProblemID", "KullaniciAdi", "AlanID", "SinifID", "MudahaleID", "AktiviteID", "AktiviteAciklama", "Tarihi"],seperate_mark,req,res);

    })
    .delete(function (req, res) {
        return deleteOnePk("calisanproblem", ids, "problem_id",seperate_mark,req,res);
    });


router.route("/calisanproblem")
    .delete(function (req, res) {
        return deleteManyPk("calisanproblem",ids,seperate_mark,req,res);
    });


module.exports = router;