const con = require("../db/db");

const FriendsSchema = `CREATE TABLE IF NOT EXISTS chatrooms(
    idno serial primary key,
    userone VARCHAR(255) NOT NULL,
    usertwo VARCHAR(255) NOT NULL
);`;
con.query(FriendsSchema, (err, data) => {
  if (err) console.error(err);
  else console.log("chatrooms Table IS UP");
});

function CreateRoom(user1, user2) {
  return con.query(
    `INSERT into chatrooms(userone,usertwo) VALUES ('${user1}', '${user2}')`
  );
}
function findRoom(user1, user2) {
  return con.query(
    `SELECT idno FROM chatrooms WHERE userone = '${user1}' AND usertwo =  '${user2}' OR userone = '${user2}' AND usertwo =  '${user1}'`
  );
}
module.exports.CreateRoom = CreateRoom;
module.exports.findRoom = findRoom;
