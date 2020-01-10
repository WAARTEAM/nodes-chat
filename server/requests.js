function findUser (req, res) {
    //expect 'user' as param
    //query for user in DB
    //return username if found
    //return false otherwise
}

function getAllFriends (req, res) {
    //expect 'user' as param
    //query for all friends with user in DB
    //filter out 'user' from results
    //send back array of friends
}

function getAllRequests (req, res) {
    //expect 'user' as param
    //query for all requests where target is user
    //send back array of requests

}

function sendRequest (req, res) {
    //expect 'requester' and 'target' as params
    //save new request to DB
}

function approveRequest (req, res) {
    //expect 'requester' and 'target' as params
    //approve request
}

function rejectRequest (req, res) {
    //expect 'requester' and 'target' as params
    //reject request
}

function getChat (req, res) {
    //expect 'userone' and 'usertwo' as params
    //find chatroom
    //find all messages with chatroom id
    //return chatroom id and array of messages
}