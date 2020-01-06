var pg = require('pg');
var conString = "postgres://postgres:password@localhost:5432/postgres";
var client = new pg.Client(conString);
client.connect();

var SendFriendRequest = function (RequesterAndTarget, callback) {
    var requester = RequesterAndTarget.requester;
    var target = RequesterAndTarget.target;

    client.query(`INSERT INTO public.Pending (requester,target, status) values(${requester},${target},Pending)`, function (err, results) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}
// update example UPDATE public.users SET friend = 'ahmed' WHERE username = 'malik'
//-- INSERT INTO public.Pending (id, requester, target, status) VALUES (1, 'hasan', 'teto', 'pending');
//select requester from public.Pending where target = 'moha'
var ShowFriendRequests = function (name, callback) {
    client.query(`select requester from public.Pending where target = '${name}' `, function (err, results) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

module.exports.SendFriendRequest = SendFriendRequest;
module.exports.ShowFriendRequests = ShowFriendRequests;
