require("dotenv").config();
const express = require("express");
const app = express();
const requests = require("./requests");
const http = require("http").Server(app);
const cors = require("cors");
var io = require("socket.io")(http);
const auth = require("./auth");

app.use(cors());
app.use(express.json());

app.post("/finduser", requests.findUser);
app.post("/sendfriendrequest", requests.sendRequest);
app.post("/rejectfriendrequest", requests.rejectRequest);
app.post("/acceptfriendrequest", requests.approveRequest);
app.post("/showfriendrequest", requests.getAllRequests);
app.post("/getmessages", requests.getChat);
app.post("/getfriends", requests.getAllFriends);

app.post("/sendmessage", function(req, res) {
  var user1 = req.body.user1;
  var user2 = req.body.user2;
  var text = req.body.data;
  Chatroom.getroomId(user1, user2).then(data => {
    var id = data.rows[0].idno;
    messages.Send(text, id).then(data => {
      res.send("message sent successfuly");
    });
  });
});

// app.use(auth.middleware);

// io.use(auth.socketMiddleware);

const port = process.env.PORT || 5001;

http.listen(port, () => {
  console.log(`server running at ${port}`);
});
