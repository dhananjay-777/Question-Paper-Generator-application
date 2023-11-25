const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });
const app = require("./app");

const server = app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server is up" });
});
