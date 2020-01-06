const express = require("express");
var db = require('./db.js');
const PORT = 1234;
var app = express();
app.use(express.json());
//////////////////////////////////////////////////////////// Search For a User in Database 
app.post('/api/search', function (req, res) {
    var val = req.body.username
    db.search(val, (err, results) => {
        if (results) {
            res.status(200).send("FOUND")
        }
        if (err) {
            res.send(err)
        }
    })
});
/////////////////////////////////////////////////////////// Send a Friend Request
app.post('/api/AddFriend', function (req, res) {
    var val = req.body.username
    db.insert(val, (err, data) => {
        if (data) {
            res.status(200)
        }
        if (err) {
            console.log("not added because of system error")
        }
    })
});
/////////////////////////////////////////////////////////////////////// PORT
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});