var pg = require('pg');
var conString = "postgres://postgres:password@localhost:5432/postgres";
var client = new pg.Client(conString);
client.connect();


module.exports = client;