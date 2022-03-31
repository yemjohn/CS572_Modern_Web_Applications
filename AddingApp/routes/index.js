const express= require("express");
const router= express.Router();
const addNumbers= require("../controllers/add.controller")

router.route("/add/:operandOne")
    .get(addNumbers.addOne);


module.exports = router;