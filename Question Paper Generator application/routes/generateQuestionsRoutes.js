const express = require("express");
const generateQuestions = require("../controllers/generateQuestionsController");

const router = express.Router();

router.route("/getQuestions").get(generateQuestions);

module.exports = router;
