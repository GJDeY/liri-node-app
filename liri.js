require("dotenv").config();
//require the filesystem
var fs = require('fs');

var keys = require("./keys.js");
//console.log(keys);

//linking the client Id and keys from .env
var spotify = new Spotify(keys.spotify);

//require request pkg 
var request = require('request');
request('http://www.google.com', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
});


//require moment
var moment = require('moment');
moment().format();


var music = process.argv[2];
console.log("music search");
//add in command line arguments - process.argv([2])
//                              - process.argv([3])
var musicSearch = "spotify-this-song" + process.argv[2];
//do if else function here
console.log(musicSearch);
