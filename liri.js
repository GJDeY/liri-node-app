require("dotenv").config();
var keys = require("./keys");//possibly "./keys.js"???
console.log(keys);


//require request pkg 
var request = require('request');
request('http://www.google.com', function (error, response, body) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
});

//add in command line arguments - process.argv([2])
//                              - process.argv([3])

//do if else function here

//