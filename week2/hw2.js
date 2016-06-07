
//notice:
//first we need to change our dir to "/creating_documents", where there is a "dump" folder, 
//then we type "mongorestore dump" in the terminal


//2.1
/*
Which of the choices below is the title of a movie from the year 2013 that is rated PG-13 and 
won no awards? Please query the video.movieDetails collection to find the answer.
*/
db.movieDetails.find({ $and : [ { "year": 2013 },
                                { "rated": "PG-13" },
                                { "awards.wins": 0}]},{title:1}).pretty()
//2.3
/*
How many movies list "Sweden" second in the the list of countries.
*/
db.movieDetails.find({"countries.1": "Sweden"},{countries : 1 , _id : 0}).count()

//2.4
/*
How many documents in our video.movieDetails collection 
list just the following two genres: "Comedy" and "Crime" with "Comedy" listed first.
*/
//notice :just have two elements in the array
   db.movieDetails.find({$and: [{"genres.0": "Comedy"},
                                {"genres": "Crime"},
                                {"genres":{$size : 2}}
                             ]},{title : 1, genres : 1 , _id : 0}).count()   
   
//2.5
/*
As a follow up to the previous question, how many documents in the video.movieDetails collection list both "Comedy" and "Crime" 
as genres regardless of how many other genres are listed?
*/
   db.movieDetails.find({$and: [{"genres": "Comedy"},
                                {"genres": "Crime"}
                                ]},{title : 1, genres : 1 , _id : 0}).count()  
