const ChatRoomsModel = require("../models/chatrooms");

function Create(user1, user2) {
  return ChatRoomsModel.CreateRoom(user1, user2)
    .then(data => {
      return data;
    })
    .catch(err => {
      throw err;
    });
}

module.exports.Create = Create;
