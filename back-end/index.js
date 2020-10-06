const express = require("express");
const app = express();
const db = require("./db/db");
const sequelize = require("sequelize");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
const routes = require("./routes/index");

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/", routes);
app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/public/" + "index.html");
});

db.sync()
  .then(() => {
    console.log("DB synched");
    app.listen(3000, () => console.log("listening on 3000"));
  })
  .catch(console.log);
