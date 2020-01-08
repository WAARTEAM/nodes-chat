require("dotenv").config();
const express = require("express");
const app = express();
require("../db/models/Chatroom");
app.use(express.json());

const port = process.env.PORT || 5001;

var server = app.listen(port, () => {
  console.log("server is running on port", server.address().port);
});
