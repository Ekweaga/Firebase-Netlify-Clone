export const apikey = "8b202e3aa9ae4600acd6c448e326badd"


export const requests = {
    latest:`https://api.themoviedb.org/3/movie/latest?api_key=${apikey}&language=en-US`,
    toprated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`,
    upcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=1`,
    trending:`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`,
    people:`https://api.themoviedb.org/3/person/popular?api_key=${apikey}&language=en-US&page=1`,
    videos:`https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=${apikey}&language=en-US`,
    tv:`https://api.themoviedb.org/3/tv/popular?api_key=${apikey}&language=en-US&page=1`,
    horror:`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=horror&page=1&include_adult=true`,
    comedy:`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=vampire&page=1&include_adult=true`,
    comedies:`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=comedy&page=1&include_adult=true`,
    cartoon:`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=cartoon&page=1&include_adult=true`,
    pirate:`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=pirate&page=1&include_adult=true`,
}