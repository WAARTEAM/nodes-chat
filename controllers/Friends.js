const FriendsModel = require("../models/Friends");

function Make(friend1, friend2) {
  return FriendsModel.CheckIfFriends(friend1, friend2)
    .then(data => {
      if (!data.rowCount > 0) {
        MakeFriends(friend1, friend2);
      } else {
        throw "already friends";
      }
    })
    .catch(err => {
      throw err;
    });
}

function MakeFriends(friend1, friend2) {
  return FriendsModel.MakeFriends(friend1, friend2)
    .then(() => {
      return true;
    })
    .catch(err => {
      throw err;
    });
}

function Check(username) {
  return FriendsModel.CheckFriends(username)
    .then(data => {
      return data;
    })
    .catch(() => {
      throw error("ERROR happend while fetching Friends");
    });
}

module.exports.Make = Make;
module.exports.Check = Check;
