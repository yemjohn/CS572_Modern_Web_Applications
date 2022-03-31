const express= require("express");
const router= express.Router();

const gamesController= require("../controllers/games.controllers");
router.route("/games")
    .get(gamesController.getAll);

router.route("/games/:gameIndex")
    .get(gamesController.getOne);
router.route("/games")
    .get(gamesController.getAll)
    .post(gamesController.addOne);

module.exports = router;