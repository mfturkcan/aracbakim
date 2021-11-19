const router = require("express").Router();
const connection = require("../../config/database");
const {getList, create, getOnePk, updateOnePk, deleteOnePk, deleteManyPk} = require("../routeHandler");

const ids = ["AlanID", "SinifID", "MudahaleID", "ProblemID"];

router.get("/problemmudahale", function (req, res) {
    return getList("MudahaleID","ProblemMudahale",req,res);
});

router.post("/problemmudahale", async function (req, res) {
    return create("ProblemMudahale",req,res);
});

router.route("/problemmudahale/:mudahale_id")
    .get(function (req, res) {
        return getOnePk("ProblemMudahale",ids,"mudahale_id","+",req,res);
    })
    .put(function (req, res) {
        return updateOnePk("ProblemMudahale",ids,"mudahale_id",["AlanID", "SinifID", "MudahaleID", "ProblemID"],"+",req,res);

    })
    .delete(function (req, res) {
        return deleteOnePk("ProblemMudahale", ids, "mudahale_id","+",req,res);
    });


router.route("/problemmudahale")
    .delete(function (req, res) {
        return deleteManyPk("ProblemMudahale",ids,"+",req,res);
    });


module.exports = router;