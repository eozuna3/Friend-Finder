var friendsData = require("../data/friends.js");

module.exports = function (app) {
  // returns all friend objects in friends.js file in a JSON format
  app.get("/api/friends", function (req, res) {
    return res.json(friendsData);
  });

  app.post("/api/new", function (req, res) {
    var newUser = req.body;
    
    for (let index = 0; index < friends.length; index++) {
       = array[index];
      
    }
    friendsData.push(newUser);
    res.json(friendsData);
  })
}