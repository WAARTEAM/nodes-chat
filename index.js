const express = require("express");
var db = require('./db.js');
const PORT = 1234;
var app = express();
app.use(express.json());
//////////////////////////////////////////////////////////// Show Friend Requests
app.post('/api/ShowFriendRequests', function (req, res) {
    var val = req.body.username
    db.ShowFriendRequests(val, (err, results) => {
        if (results) {
            res.status(200).send(results)
        }
        if (err) {
            res.send(err)
        }
    })
});
/////////////////////////////////////////////////////////// Send a Friend Request
app.post('/api/SendFriendRequest', function (req, res) {
    var requester = req.body.requester
    var target = req.body.target
    val = { requester: requester, target: target }
    db.SendFriendRequest(val, (err, results) => {
        if (results) {
            res.status(200).send("SENT")
        }
        if (err) {
            console.log("not added because of system error")
        }
    })
});
/////////////////////////////////////////////////////////// Accept a Friend Request
app.post('/api/AcceptFriendRequest', function (req, res) {
    var requester = req.body.requester
    var target = req.body.target
    val = { requester: requester, target: target }
    db.AcceptFriendRequest(val, (err, results) => {
        if (results) {
            res.status(200).send("Accepted")
        }
        if (err) {
            res.send(err)
            console.log(err)
        }
    })
});
/////////////////////////////////////////////////////////////////////// PORT
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});