require("dotenv").config();
//require the filesystem
var fs = require('fs');

var keys = require("./keys.js");
//console.log(keys);


//require request pkg 
var request = require('request');
request('http://www.google.com', function (error, response, body) {
    //   console.log('error:', error); // Print the error if one occurred
    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
});




//require moment
var moment = require('moment');
moment().format();






///////////  OMDB Movie search section  ////////////
var omdbSearch = process.argv[3];


//          requesting to OMDB API
var queryUrl = "http://www.omdbapi.com/?t=" + omdbSearch + "&y=&plot=short&apikey=trilogy";
//////////fix above *'s with key

//  show what you searched for (query URL to the OMDB API.)
// console.log(queryUrl);

// request(queryUrl, function (error, response, body) {

//     // If the request is successful
//     if (!error && response.statusCode === 200) {

//     }
// });


//////////////Spotify-this-song section
var Spotify = require('node-spotify-api');

//linking the client Id and keys from .env
var spotify = new Spotify(keys.spotify);

function spotifySearch(songTitle) {

    spotify.search({ type: 'track', query: songTitle }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log(data);
    });
}
//main search function
var search = process.argv[2];
var userSearch = process.argv[3];
switch (search) {
    case 'spotify-this-song':
        console.log('is what you searched for.');
        spotifySearch(userSearch);
        break;
    case 'movie-this':
        console.log('is what you searched for.');
        break;

    ///movie this function


    case 'concert-this':
        console.log('is in town!');
        //concert this function

        break;
    default:
        console.log('sorry, no information for ' + search + '!');
}






//append commands to log.txt file