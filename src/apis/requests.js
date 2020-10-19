const KEY = "0fe617b060be0d4717c698f9b98fc126";

const requests ={
    fetchTrendingNow :'trending/all/week?api_key='+KEY+'&language=en-US',
    fetchNetflixOriginals :'discover/tv?api_key='+KEY+'&with_network=213',
    fetchActionMovies: 'discover/movie?api_key='+KEY+'&with_genres=28',
    fetchTopRated:'movie/top_rated/?api_key='+KEY+'&language=en-US',
    fetchComedyMovies: 'discover/movie?api_key='+KEY+'&with_genres=35',
    fetchHorrorMovies: 'discover/movie?api_key='+KEY+'&with_genres=27',
    fetchRomanceMovies: 'discover/movie?api_key='+KEY+'&with_genres=10749',
    fetchDocumentaries: 'discover/movie?api_key='+KEY+'&with_genres=99'
}
export default requests;