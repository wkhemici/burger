// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 3000;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Data
var burgers = [
  {
    burgers: "Cheese Burger",
    devoured: false
  }, {
    burgers: "Chicken Burger",
    devoured: false
  }, {
    burgers: "Guacamole Burger",
    devoured: false
  }
];

// Routes
app.get("/home", function(req, res) {
  res.render("index", burgers[0]);
});

app.get("/", function(req, res) {
  res.render("index", burgers[1]);
});

app.get("/burgers", function(req, res) {
  res.render("all-burgers", {
    burgers: burgers,
    devoured: devoured
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
