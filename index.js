const express = require("express");
var db = require('./db.js');
const PORT = 1234;
var app = express();
app.use(express.json());

const Friend = require('./controllers/Friends')

app.post('/api/MakeFriends', function (req, res) {
    var friend1 = req.body.friend1
    var friend2 = req.body.friend2

    Friend.Make(friend1, friend2)
        .then((data) => {
            res.status(200).send("ADDED")
        })
        .catch(err => {
            res.status(401).send(err)
        })
});

app.post('/api/FetchFriends', function (req, res) {
    var username = req.body.username
    Friend.Check(username)
        .then((data) => {
            res.status(200).send(data)
        })
        .catch(err => {
            res.status(401).send(err)
        })
});

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});