/**
 * Imports the `express`, router`, and `body-parser` modules
 */
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

/**
 * Imports the routes to be used
 */
const index = require("./routes/index");
const words = require("./routes/words")
const validation = require("./routes/validation_route")

/**
 * Port the server listens on
 */
const port = 7000;

const app = express();

/**
 * Set the headers the server accepts
 */
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
	next();
});

/**
 * Sets the view engine for the server
 */
app.set('views', __dirname + '/views')
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

/**
 * Body-parser middleware
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/**
 * Sets the JSON spacing for JSON data that is sent back to the user
 */
app.set("json spaces", 2)

/**
 * Setting the routes to be used
 */
app.use("/", index);
app.use("/api", [words, validation]);

/**
 * Called when the server is ready and it listens on the specified port
 */
app.listen(port, function(){
	console.log("Server started on port " + port);
});