const con = require("../db");

const messagesSchema = ` CREATE TABLE IF NOT EXIST messages (
messagestext VARCHAR(255) UNIQUE NOT NULL
)`;

con.query(messagesSchema),
  (err, data) => {
    if (err) console.log(error);
    else console.log("message created sucessfully");
  };
function createMessage(message) {
  return con.query(`INSERT into messagestext(message) VLAUES ($1),  `, [
    message
  ]);
}
createMessage("bad bitches only");

function deletemessage(room) {
  return con.query(` DELETE FROM messagestext WHERE message = '${message}'`);
}
deletemessage("No good bitchess");

function readmessage(room) {
  return con.query(`SELECT * FROM messagetext`);
}

module.exports.message = createMessage;
module.exports.delmessage = deletemessag;
module.exports.readmsg = readmessage;
