var friendsData = require("../data/friends.js");
var path = require("path");

module.exports = function(app){

app.get("/api/friends.js", function(req, res) {
    res.json(friendsData);
  });

app.post("/api/friends.js", function(req, res){
  friendsData.push(req.body);
res.json(false);

});

};