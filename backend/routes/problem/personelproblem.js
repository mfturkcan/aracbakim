const router = require("express").Router();
const {getList, create, getOne, updateOne, deleteOne,deleteMany} = require("../routeHandler");

router.get("/personelproblem", function(req,res){
    return getList("KullaniciAdi","PersonelProblem", req, res);
});

router.post("/personelproblem",  function (req, res) {
    return create("PersonelProblem",req,res);
});

router.route("/personelproblem/:kullanici_adi")
    .get(function (req, res) {
        return getOne("PersonelProblem","KullaniciAdi","kullanici_adi",req,res);
    })
    .put(function (req, res) {
        const columns = ["KullaniciAdi","ProblemID"];

        return updateOne("PersonelProblem","KullaniciAdi","kullanici_adi",columns,req,res);
    })
    .delete(function (req, res) {
        return deleteOne("PersonelProblem","KullaniciAdi","kullanici_adi",req,res);
    });


router.route("/personelproblem")
    .delete(function (req, res) {
        return deleteMany("PersonelProblem","KullaniciAdi",req,res);
    });


module.exports = router;