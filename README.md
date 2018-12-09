Liri looking for an artist sent to the process.argv[3]:

```
dyn-209-2-211-85:liri-node-app angel$ node liri concert-this 'Lady Gaga'
this is loaded
Hello there! here are the concerts that I found for Lady Gaga:
#############################################
Name: LADY GAGA ENIGMA
Location: Las Vegas, NV
Country: United States
Date: Friday, December 28th 2018, 8:00:41 pm
#############################################
#############################################
Name: LADY GAGA ENIGMA
Location: Las Vegas, NV
Country: United States
Date: Sunday, December 30th 2018, 8:00:51 pm
#############################################
#############################################
Name: LADY GAGA ENIGMA
Location: Las Vegas, NV
Country: United States
Date: Monday, December 31st 2018, 8:00:36 pm
#############################################
#############################################
Name: LADY GAGA ENIGMA
Location: Las Vegas, NV
Country: United States
Date: Thursday, January 17th 2019, 8:00:06 pm
#############################################
#############################################
Name: LADY GAGA ENIGMA
Location: Las Vegas, NV
Country: United States
Date: Saturday, January 19th 2019, 8:00:03 pm
#############################################
```

Some of the output was ommited but it can be found in the log.txt file

Now this is the spotify command looking for a song specified in the terminal:

```
dyn-209-2-211-85:liri-node-app angel$ node liri spotify-this-song "De Naranja (Remix)"
this is loaded
Hello there! here are the first 5 songs that I found in Spotify for De Naranja (Remix):
###########################################################################
Artist(s): Musicologo The Libro
Song name: De Naranja - Remix
Album: De Naranja Remix
###########################################################################
Artist(s): La Nueva Escuela Del Dembow
Song name: Tutuma / Conejita / Hoy Me Desacato / Colale / Maniqui / Lo Que Sube Baja / Suave (Remix) / De Naranja / Subete / Coco / Saoco / Plakiti Plakiti / Con La Careta de Chucky / Dale Paya / El Singon / Rico Coño / Prende Haze / Bien Tropical
Album: Lo Mas Pegado del Dembow (Vol. 1)
###########################################################################
```

This is spotify command looking for a song by default when it is not specified on terminal:

```
dyn-209-2-211-85:liri-node-app angel$ node liri spotify-this-song
this is loaded
Hello there! here are the first 5 songs that I found in Spotify for The sing by Ace of Base:
###########################################################################
Artist(s): Sing Strike Karaoke
Song name: The Sign (Karaoke Version) - Originally Performed By Ace Of Base
Album: The Sign (Karaoke Version) (Originally Performed By Ace Of Base)
###########################################################################
Artist(s): Sing Fire Karaoke
Song name: The Sign (Karaoke Version) - Originally Performed By Ace of Base
Album: The Sign (Karaoke Version) (Originally Performed By Ace of Base)
###########################################################################
Artist(s): Sing Strike Karaoke
Song name: The Sign (Karaoke Version) - Originally Performed By Ace Of Base
Album: Karaoke In Style Of Ace Of Base
###########################################################################
Artist(s): The Karaoke Channel
Song name: The Sign (Originally Performed by Ace of Base) [Karaoke Version]
Album: The Karaoke Channel - Sing the Sign Like Ace of Base
###########################################################################
Artist(s): The Karaoke Crew
Song name: The Sign (As Made Famous by Ace of Base)
Album: Drew's Famous # 1 Karaoke Hits: Sing the Hits of 1994
###########################################################################

```

And this is by reading the command and song as specified in random.txt. You could modify the first two parameters in random.txt; the first argument will always be the command you want liri to execute and the second would be what you want it to search. Only the first 2 are taken into account and they must be separated by comma.

```
dyn-209-2-211-85:liri-node-app angel$ node liri do-what-it-says
this is loaded
Hello there! here are the first 5 songs that I found in Spotify for "I Want it That Way":
###########################################################################
Artist(s): Backstreet Boys
Song name: I Want It That Way
Album: The Hits--Chapter One
###########################################################################
Artist(s): Backstreet Boys
Song name: I Want It That Way
Album: Millennium
###########################################################################
Artist(s): Anthem Lights
Song name: I Want It That Way
Album: Covers Part IV
###########################################################################
Artist(s): Tyler and Mark
Song name: I Want It That Way
Album: Beautiful Dreams
###########################################################################
Artist(s): Dynamite Boy
Song name: I Want It That Way
Album: Punk Goes Pop
###########################################################################

```

This is now the command for searching movies:

With none specified in terminal, it will search for Mr. Nobody:

```
dyn-209-2-211-85:liri-node-app angel$ node liri movie-this
this is loaded

###########################################################################
Title: Mr. Nobody
Year: 2009
Rating: 67%
Country: Belgium, Germany, Canada, France, USA, UK
Languague: English, Mohawk
Plot: A boy stands on a station platform as a train is about to leave. Should he go with his mother or stay with his father? Infinite possibilities arise from this decision. As long as he doesn't choose, anything is possible.
Actors: Jared Leto, Sarah Polley, Diane Kruger, Linh Dan Pham
###########################################################################

```
And this is by specifying one:

```
dyn-209-2-211-85:liri-node-app angel$ node liri movie-this "the matrix"
this is loaded
###########################################################################
Title: The Matrix
Year: 1999
Rating: 88%
Country: USA
Languague: English
Plot: A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.
Actors: Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving
###########################################################################

```



