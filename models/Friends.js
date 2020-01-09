const con = require("../db/db");

const FriendsSchema = `CREATE TABLE IF NOT EXISTS friends(
    friend1 VARCHAR(255) NOT NULL,
    friend2 VARCHAR(255) NOT NULL
);`;
con.query(FriendsSchema, (err, data) => {
  if (err) console.error(err);
  else console.log("Friends Table IS UP");
});

function MakeFriends(friend1, friend2) {
  return con.query(
    `INSERT into friends(friend1,friend2) VALUES ('${friend1}', '${friend2}')`
  );
}
function CheckIfFriends(friend1, friend2) {
  return con.query(
    `SELECT * from friends WHERE friend1 = '${friend1}' AND friend2 = '${friend2}' OR friend1 = '${friend2}' AND friend2 = '${friend1}'`
  );
}
function CheckFriends(username) {
  return con.query(
    `SELECT * FROM friends WHERE friend1 = '${username}' OR friend2= '${username}'`
  );
}

module.exports.CheckIfFriends = CheckIfFriends;
module.exports.MakeFriends = MakeFriends;
module.exports.CheckFriends = CheckFriends;
