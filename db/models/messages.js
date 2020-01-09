// const con = require("../db");

// const messagesSchema = ` CREATE TABLE IF NOT EXISTS messages (
// messagestext VARCHAR(255) UNIQUE NOT NULL

// )`;

// con.query(messagesSchema),
//   (err, data) => {
//     if (err) console.log(error);
//     else console.log("message created sucessfully");
//   };
// function createMessage(message) {
//   return con.query(`INSERT into messagestext(message) VALUES ($1), `, [
//     message
//   ]);
// }
// createMessage("bad bitches only");

// function deletemessage(message) {
//   return con.query(
//     ` DELETE FROM messagestext WHERE messagetext = '${message}'`
//   );
// }

// function readmessage(username) {
//   return con.query(`SELECT * FROM messagetext = '${message}`);
// }

// module.exports.message = createMessage;
// module.exports.delmessage = deletemessage;
// module.exports.readmsg = readmessage;
