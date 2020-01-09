require("dotenv").config();
const express = require("express");
const app = express();
const Friend = require("../controllers/Friends");
const Pending = require("../controllers/Pending");

// require("../db/models/Chatroom");
// require("../db/models/messages");

const http = require("http").Server(app);
const cors = require("cors");
var io = require("socket.io")(http);
const auth = require("./auth");

app.use(cors());

app.use(express.json());
app.get("/", function(req, res) {
  res.send("hello world");
});
app.post("/MakeFriends", function(req, res) {
  var friend1 = req.body.friend1;
  var friend2 = req.body.friend2;
  Friend.Make(friend1, friend2)
    .then(data => {
      console.log("success");
      res.send("success");
    })
    .catch(err => {
      console.log(err);
      res.send("you are friends already");
    });
});
app.post("/SendFriendRequest", function(req, res) {
  var requester = req.body.requester;
  var target = req.body.target;
  Pending.Send(requester, target)
    .then(data => {
      console.log("success");
      res.send("success");
    })
    .catch(err => {
      console.log(err);
      res.send("friend request was sent");
    });
});
app.post("/AcceptFriendRequest", function(req, res) {
  var requester = req.body.requester;
  var target = req.body.target;
  Pending.DeleteFromPending(requester, target)
    .then(data => {
      // console.log(data);
      // res.send(data);
      if (data.rowCount > 0) {
        Friend.Make(requester, target)
          .then(data => {
            console.log("success");
            res.send("success");
          })
          .catch(err => {
            console.log(err);
            res.send("you are friends already");
          });
      }
    })
    .catch(err => {
      console.log(err);
      res.send("nigga something happend like very bad thing");
    });
});
app.post("/ShowFriendRequest", function(req, res) {
  var username = req.body.username;

  Pending.Fetch(username)
    .then(data => {
      console.log(data);
      res.send(data);
    })
    .catch(err => {
      console.log(err);
      res.send("opps! something went wrong");
    });
});

app.use(auth.middleware);

io.use(auth.socketMiddleware);

const port = process.env.PORT || 5001;

http.listen(port, () => {
  console.log(`server running at ${port}`);
});
