
//2.1
db.movieDetails.find({ $and : [ { "year": 2013 },
                                { "rated": "PG-13" },
                                { "awards.wins": 0}]},{title:1}).pretty()
//2.3
db.movieDetails.find({"countries.1": "Sweden"},{countries : 1 , _id : 0}).count()

/*
db.movieDetails.find({$and: [{"genres.0": "Comedy"},
                             {genres: "Crime"}
                           ]},{title : 1, genres : 1 , _id : 0}) 
*/
//notice :just have two elements in the array
   db.movieDetails.find({$and: [{"genres.0": "Comedy"},
                                {"genres": "Crime"},
                                {"genres":{$size : 2}}
                             ]},{title : 1, genres : 1 , _id : 0}).count()   
   
//2.4
   db.movieDetails.find({$and: [{"genres": "Comedy"},
                                {"genres": "Crime"}
                                ]},{title : 1, genres : 1 , _id : 0}).count()  
