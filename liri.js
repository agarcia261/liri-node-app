require("dotenv").config();
var axios=require('axios');
var fs=require('fs')
var Spotify = require('node-spotify-api');
var keys=require("./keys")

var spotify = new Spotify(keys.spotify);


var command = process.argv[2]

switch (command){
    case "concert-this":
        console.log("concert works")
        concert()
        break

    case "spotify-this-song":
        console.log("spotify")
            spotifyFunction()
        break

    case "movie-this":
        console.log("movie")
        movies()
        break

    case "do-what-it-says":
        console.log("what it says")
        fs.readFile('random.txt','utf8', function(err, data) {

            if(err){
                console.log("404")
            }
            var output=data.split(",")
            switch (output[0]){
                case "concert-this":
                    console.log("concert works")
                    concert(output[1])
                    break
        
                case "spotify-this-song":
                    console.log("spotify")
                    spotifyFunction(output[1])
                    break
        
                case "movie-this":
                    console.log("movie")
                    movies(output[1])
                    break            
                }
          });        
        break

    default: 
        console.log("Sorry, I did not understand that. Please try again")
}

function concert(input){
    if (input){
        console.log(input)
        var artist = input
    }
    else{
        var artist = process.argv[3]
    }
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(queryUrl)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
    });
}

function spotifyFunction(input){
    if (input){
        var search=input
    }
    else{
        if (process.argv[3]){
            var search = process.argv[3]
        }
        else{
            var search ='The sing by Ace of Base'
        }
    }
    spotify.search({ type: 'track', query: search })
    .then(function(response) {
      console.log(response.tracks);
    })
    .catch(function(err) {
      console.log(err);
    });

}

function movies(input){
    if (input){
        var movieName = input
    }
    else{
        if (process.argv[3]){
            var movieName = process.argv[3]
        }
        else{
            var movieName ="Mr. Nobody."
        }
    }

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    axios.get(queryUrl)
        .then(function (response) {
            console.log(response.data);
    })
}
