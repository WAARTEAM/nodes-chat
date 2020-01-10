const con = require("../db/db");

const MessagesSchema = `CREATE TABLE IF NOT EXISTS messages(
   data VARCHAR(255),
    date DATE NOT NULL DEFAULT CURRENT_DATE,
    chatroom_id INTEGER NOT NULL
)`;
con.query(MessagesSchema, (err, data) => {
  if (err) console.error(err);
  else console.log("messages Table IS UP");
});

function sendMessage(data, chatroom_id) {
  return con.query(
    `INSERT into messages (data,chatroom_id) VALUES ('${data}', '${chatroom_id}')`
  );
}

function checkMessage(chatroom_id) {
  return con.query(
    `SELECT * FROM messages WHERE chatroom_id  = '${chatroom_id}'`
  );
}
module.exports.sendMessage = sendMessage;
module.exports.checkMessage = checkMessage;
