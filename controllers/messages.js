const messagesModel = require("../models/messages");
// pass parameter to the send message function 
function Send(data, chatroom_id) {
  return messagesModel
    .sendMessage(data, chatroom_id)
    .then(data => {
      return data;
    })
    .catch(err => {
      throw err;
    });
}
// pass the chat room id  to check messages function 
function Fetch(chatroom_id) {
  return messagesModel
    .checkMessage(chatroom_id)
    .then(data => {
      return data;
    })
    .catch(err => {
      throw err;
    });
}

module.exports.Send = Send;
module.exports.Fetch = Fetch;
