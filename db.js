var pg = require('pg');
var conString = "postgres://postgres:password@localhost:5432/postgres";

var client = new pg.Client(conString);
client.connect();


var insert = function (name, callback) {
    client.query(`INSERT INTO public.users(username) values('${name}')`, function (err, results) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}
// update example UPDATE public.users SET friend = 'ahmed' WHERE username = 'malik'

var search = function (name, callback) {
    client.query(`select username from public.users WHERE username = '${name}' `, function (err, results) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, results);
        }
    });
}

module.exports.insert = insert;
module.exports.search = search;
