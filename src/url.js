export const apikey = "8b202e3aa9ae4600acd6c448e326badd"


export const requests = {
    latest:`https://api.themoviedb.org/3/movie/latest?api_key=${apikey}&language=en-US`,
    toprated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}&language=en-US&page=1`,
    upcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}&language=en-US&page=1`,
    trending:`https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`,
    people:`https://api.themoviedb.org/3/person/popular?api_key=${apikey}&language=en-US&page=1`,
    videos:`https://api.themoviedb.org/3/movie/{movie_id}/videos?api_key=${apikey}&language=en-US`,
    tv:`https://api.themoviedb.org/3/tv/popular?api_key=${apikey}&language=en-US&page=1`
}