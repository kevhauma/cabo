const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const GameController = require("./controllers/GameController");

const app = express();

app.get("/", (req, res) => {
  res.status(200);
  res.send("Welcome to the API");
});

//doesn't work?
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(cors());
app.use(bodyParser.json());


GameController(app);

app.listen(3001, () => console.log("listening on port 3001"));

module.exports = { app };
