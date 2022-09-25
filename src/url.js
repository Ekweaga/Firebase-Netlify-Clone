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
    hero:`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=hero&page=1&include_adult=true`,
    marvel:`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=marvel&page=1&include_adult=true`,
    america:`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=america&page=1&include_adult=true`,
    adventure:`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=adventure&page=1&include_adult=true`,
    drama:`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=drama&page=1&include_adult=true`,
    fiction:`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=fiction&page=1&include_adult=true`,
    fantasy:`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=fantasy&page=1&include_adult=true`,
    romance:`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=romance&page=1&include_adult=true`,
    western:`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=western&page=1&include_adult=true`,
    nigeria:`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&language=en-US&query=africa&page=1&include_adult=true`,
}