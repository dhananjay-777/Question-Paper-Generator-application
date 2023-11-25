const express = require("express");
const app = express();
const questionsRoute = require("./routes/generateQuestionsRoutes");
app.use(express.json());

app.use("/api/v1", questionsRoute);

module.exports = app;
