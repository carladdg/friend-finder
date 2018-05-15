var friends = require("../data/friends");

function apiRoutes(app) {
    app.get("/api/friends", function(request, response) {
        return response.json(friends);
    })

    app.post("/api/friends", function(request, response) {
        var userScores = request.body.scores;
        var closestMatch = {};
        var closestMatchDifference = Infinity;

        friends.forEach(function(friend) {
            var matchDifference = 0;
            friend.scores.forEach(function(score, index) {
                matchDifference += Math.abs(score - userScores[index]);
            })
            if (matchDifference < closestMatchDifference) {
                closestMatchDifference = matchDifference;
                closestMatch = friend;
            }
        })

        friends.push(request.body);
        response.json(closestMatch);
    })
}

module.exports = apiRoutes;