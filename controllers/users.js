const usersModel = require("../models/users");

function finduser(username) {
  return usersModel
    .find(username)
    .then(data => {
      return data;
    })
    .catch(err => {
      throw err;
    });
}

module.exports.finduser = finduser;
