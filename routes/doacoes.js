const router = require("express").Router();

const checkTokenRole = require("../middleware/authMiddlewareEmployee")
const checkToken = require("../middleware/authMiddlewareUser")

const doacaoController = require("../controllers/doacaoController");

//

router.route("/doacoes").post((req, res) => {
  doacaoController.create(req, res);
});

router.route("/doacoes").get(checkTokenRole,(req, res) => {
  doacaoController.getAll(req, res);
});

router.route("/doacoes/:honor").get(checkToken,(req,res)=>{
    doacaoController.getByDonor(req,res);
})

module.exports = router;
