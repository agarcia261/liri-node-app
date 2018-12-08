require("dotenv").config();
var axios=require('axios');
var fs=require('fs')
var Spotify = require('node-spotify-api');
var keys=require("./keys")
var moment = require('moment');

var spotify = new Spotify(keys.spotify);


var command = process.argv[2]

switch (command){
    case "concert-this":
        concert()
        break

    case "spotify-this-song":
            spotifyFunction()
        break

    case "movie-this":
        movies()
        break

    case "do-what-it-says":
        fs.readFile('random.txt','utf8', function(err, data) {

            if(err){
                console.log("404")
            }
            var output=data.split(",")
            switch (output[0]){
                case "concert-this":
                    concert(output[1])
                    break
        
                case "spotify-this-song":
                    spotifyFunction(output[1])
                    break
        
                case "movie-this":
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
        var artist = input
    }
    else{
        var artist = process.argv[3]
    }
    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    axios.get(queryUrl)
        .then(function (response) {
            console.log("Hello there! here are the concerts that I found for "+artist+":");

            for(var i=0; i<response.data.length; i++){
                console.log("#############################################");
                console.log("Name: "+response.data[i].venue.name);
                console.log("Location: "+response.data[i].venue.city+", "+response.data[i].venue.region);
                console.log("Country: "+response.data[i].venue.country);
                console.log("Date: "+moment(response.data[i].datetime).format("dddd, MMMM Do YYYY, h:mm:ss a"));
                console.log("#############################################");


                fs.appendFile("log.txt",
                    "\r\n######################### Concert Output ################################## \r\n"+
                    "Name: "+response.data[i].venue.name+"\r\n"+
                    "Location: "+response.data[i].venue.city+", "+response.data[i].venue.region+"\r\n"+
                    "Country: "+response.data[i].venue.country+"\r\n"+
                    "Date: "+moment(response.data[i].datetime).format("dddd, MMMM Do YYYY, h:mm:ss a")+"\r\n"+
                    "###########################################################################", 
            
                function (err) {
                    if (err) throw err;
                });
            }
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
    var limit = 5;
    spotify.search({ type: 'track', query: search, limit:limit })
    .then(function(response) {
        console.log("Hello there! here are the first "+ limit +" songs that I found in Spotify for "+search+":");
        console.log("###########################################################################");
        for (var i=0; i<response.tracks.items.length; i++){
            console.log("Artist(s): "+response.tracks.items[i].artists[0].name)
            console.log("Song name: "+response.tracks.items[i].name);
            console.log("Album: "+response.tracks.items[i].album.name);
            console.log("###########################################################################");

            fs.appendFile("log.txt",
                "\r\n########################## Spotify Output "+ (i+1) +" ############################### \r\n"+
                "Artist(s): "+response.tracks.items[i].artists[0].name+"\r\n"+
                "Song name: "+response.tracks.items[i].name+"\r\n"+
                "Album: "+response.tracks.items[i].album.name+"\r\n"+
                "###########################################################################", 
            
            function (err) {
               if (err) throw err;
             });
        }
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
            console.log("###########################################################################");
            console.log("Title: "+ response.data.Title);
            console.log("Year: "+ response.data.Year);
            console.log("Rating: "+ response.data.Ratings[1].Value);
            console.log("Country: "+ response.data.Country);
            console.log("Languague: "+ response.data.Language);
            console.log("Plot: "+ response.data.Plot);
            console.log("Actors: "+ response.data.Actors);
            console.log("###########################################################################");

            fs.appendFile("log.txt",
                "\r\n########################### Movie Output ##################################\r\n"+
                "Title: "+ response.data.Title+"\r\n"+
                "Year: "+ response.data.Year +"Rating: "+ response.data.Ratings[1].Value+"\r\n"+
                "Country: "+ response.data.Country+"\r\n"+
                "Language: "+ response.data.Language+"\r\n"+
                "Plot: "+ response.data.Plot+"\r\n"+
                "Actors: "+ response.data.Actors+"\r\n"+
                "###########################################################################", 
             
            function (err) {
                if (err) throw err;
            });
    })
}
