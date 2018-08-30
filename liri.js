require("dotenv").config();
//require the filesystem
var fs = require('fs');

var keys = require("./keys.js");
//console.log(keys);



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




search = process.argv[2];
var search = 'concert-this';
switch (search) {
    case 'spotify-this-song':
        console.log('is what you searched for.');
        break;
    case 'movie-this':
        console.log('is what you searched for.');
        break;
    case 'concert-this':
        console.log('is in town!');
        break;
    default:
        console.log('sorry, no information for ' + search + '!');
}


///////////  OMDB Movie search section  ////////////
var omdbSearch = process.argv[3];


//          requesting to OMDB API
var queryUrl = "http://www.omdbapi.com/?t=" + omdbSearch + "&y=&plot=short&apikey=*******";
//////////fix above *'s with key

//  show what you searched for (query URL to the OMDB API.)
console.log(queryUrl);

request(queryUrl, function (error, response, body) {

    // If the request is successful
    if (!error && response.statusCode === 200) {

    }
});
console.log("movie-this");





//////////////Spotify-this-song section
var Spotify = require('node-spotify-api');

//linking the client Id and keys from .env
var music = new Spotify(keys.spotify);





var spotify = process.argv[3];
console.log("music search");
//add in command line arguments music- process.argv([2])
//                              "spotify-this-song' = process.argv([3])
//var spotify = "spotify-this-song" + process.argv[2];
//do if else function here
//console.log(spotify);


//spotify-this-song if else statement
//if (spotify === true) {
//}
//else if (spotify === false) {
//}
//else {
//run liri.js
//  liri.js
//}







//append commands to log.txt file