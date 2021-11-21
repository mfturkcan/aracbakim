const router = require("express").Router();
const {getList, create, getOnePk, updateOnePk, deleteOnePk, deleteManyPk} = require("../routeHandler");

const ids = ["ProblemID", "KullaniciAdi"];
const seperate_mark = "&&";

router.get("/personelproblem", function (req, res) {
    return getList("KullaniciAdi","PersonelProblem",req,res);
});

router.post("/personelproblem", async function (req, res) {
    return create("PersonelProblem",req,res);
});

router.route("/personelproblem/:kullanici_adi")
    .get(function (req, res) {
        return getOnePk("PersonelProblem",ids,"kullanici_adi",seperate_mark,req,res);
    })
    .put(function (req, res) {
        return updateOnePk("PersonelProblem",ids,"kullanici_adi",["ProblemID", "KullaniciAdi"],seperate_mark,req,res);

    })
    .delete(function (req, res) {
        return deleteOnePk("PersonelProblem", ids, "kullanici_adi",seperate_mark,req,res);
    });


router.route("/personelproblem")
    .delete(function (req, res) {
        return deleteManyPk("PersonelProblem",ids,seperate_mark,req,res);
    });


module.exports = router;