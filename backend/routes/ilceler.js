const router = require("express").Router();
const connection = require("../config/database");
const {getOnePk, updateOnePk, deleteOnePk, deleteManyPk, create, getList} = require("./routeHandler");

router.get("/ilceler", function (req, res) {
    return getList("IlceAdi","Ilceler",req,res);
});

router.post("/ilceler", async function (req, res) {
    return create("Ilceler",req,res);
});

router.route("/ilceler/:ilce_kodu")
    .get(function (req, res) {
        return getOnePk("Ilceler",["IlceKodu","IlKodu"],"ilce_kodu","!",req,res);
    })
    .put(function (req, res) {
        return updateOnePk("Ilceler",["IlceKodu","IlKodu"],"ilce_kodu",["IlKodu","IlceAdi","IlceKodu"],"!",req,res);

    })
    .delete(function (req, res) {
        return deleteOnePk("Ilceler",["IlceKodu","IlKodu"],"ilce_kodu","!",req, res );
    });


router.route("/ilceler")
    .delete(function (req, res) {
        return deleteManyPk("Ilceler", ["IlceKodu","IlKodu"],"!",req,res);
    });


module.exports = router;