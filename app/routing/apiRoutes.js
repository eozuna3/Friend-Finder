var friendsData = require("../data/friends.js");

module.exports = function (app) {
  // returns all friend objects in friends.js file in a JSON format
  app.get("/api/friends", function (req, res) {
    return res.json(friendsData);
  });

  app.post("/api/new", function (req, res) {
    var newUser = req.body;
    var differencesArray = [];
    console.log("Here are the scores for the newUser: " + newUser.scores);
    console.log("here is the current length of the friendsArray: " + friendsData.length);
    for (let index = 0; index < friendsData.length; index++) {
      var individualScores = friendsData[index].scores;
      console.log("Here are the scores for each individual in the friendsArray: " + individualScores);
      var totalDifference = 0;
      for (var x = 0; x < 10; x++) {
        totalDifference += (Math.abs(individualScores[x] - newUser.scores[x]));
      }
      console.log(totalDifference);
      differencesArray.push(totalDifference);
    }
    console.log(differencesArray);
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