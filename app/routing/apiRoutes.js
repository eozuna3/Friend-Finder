var friendsData = require("../data/friends.js");

module.exports = function (app) {
  // returns all friend objects in friends.js file in a JSON format
  app.get("/api/friends", function (req, res) {
    return res.json(friendsData);
  });

  app.post("/api/new", function (req, res) {
    var newUser = req.body;
    newUser.scores = newUser.scores.map(Number);
    var differencesArray = [];
    for (let index = 0; index < friendsData.length; index++) {
      var individualScores = friendsData[index].scores;
      var totalDifference = 0;
      for (var x = 0; x < 10; x++) {
        totalDifference += (Math.abs(individualScores[x] - newUser.scores[x]));
      }
      differencesArray.push(totalDifference);
    }
    friendsData.push(newUser);
    return res.json(friendsData[arrayMin(differencesArray)]);
  })
}

function arrayMin(arr) {
  var lowest = 0;
 for (var i = 1; i < arr.length; i++) {
  if (arr[i] < arr[lowest]) lowest = i;
 }
 return lowest;
}