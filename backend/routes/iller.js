const router = require("express").Router();
const connection = require("../config/database");
const {getList, create, getOne, updateOne, deleteOne,deleteMany} = require("./routeHandler");

router.get("/iller", function(req,res){
    return getList("IlKodu","Iller", req, res);
});

router.post("/iller",  function (req, res) {
    return create("Iller",req,res);
});

router.route("/iller/:il_kodu")
    .get(function (req, res) {
        return getOne("Iller","IlKodu","il_kodu",req,res);
    })
    .put(function (req, res) {
        const columns = ["IlKodu", "IlAdi"];

        return updateOne("Iller","IlKodu","il_kodu",columns,req,res);
    })
    .delete(function (req, res) {
        return deleteOne("Iller","IlKodu","il_kodu",req,res);
    });


router.route("/iller")
    .delete(function (req, res) {
        return deleteMany("Iller","IlKodu",req,res);
    });


module.exports = router;