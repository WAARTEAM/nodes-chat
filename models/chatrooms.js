const con = require("../db/db");

const FriendsSchema = `CREATE TABLE IF NOT EXISTS chatrooms(
    id serial primary key,
    User1 VARCHAR(255) NOT NULL,
    User2 VARCHAR(255) NOT NULL
);`;
con.query(FriendsSchema, (err, data) => {
  if (err) console.error(err);
  else console.log("chatrooms Table IS UP");
});

function CreateRoom(user1, user2) {
  return con.query(
    `INSERT into chatrooms(User1,User2) VALUES ('${user1}', '${user2}')`
  );
}

module.exports.CreateRoom = CreateRoom;
