const express= require("express");
const router= express.Router();

const studentController= require("../controllers/student.controllers");
router.route("/students")
    .get(studentController.getAll);

router.route("/students/:studentIndex")
    .get(studentController.getOne);


module.exports = router;