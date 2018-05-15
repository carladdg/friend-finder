var path = require("path");

function htmlRoutes(app) {
    app.get("/survey", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/survey.html"));
    })

    app.get("*", function(request, response) {
        response.sendFile(path.join(__dirname, "../public/index.html"));
    })
}

module.exports = htmlRoutes;