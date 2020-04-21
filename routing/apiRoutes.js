var friendsData = require("../app/data/friends.js");

module.exports = function (app) {
  // returns all friend objects in friends.js file in a JSON format
  app.get("/api/friends", function (req, res) {
    return res.json(friendsData);
  });
}