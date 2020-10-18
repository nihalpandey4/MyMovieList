const KEY = "0fe617b060be0d4717c698f9b98fc126";

const requests ={
    fetchTrendingNow :'trending/all/week?api_key='+KEY+'&language=en-US',
    fetchNetflixOriginals :'discover/tv?api_key='+KEY+'&with_network=213',
    fetchActionMovies: 'discover/movie?api_key='+KEY+'&with_genre=28',
    fetchTopRated:'movie/top_rated/?api_key='+KEY+'&language=en-US',
    fetchComedyMovies: 'discover/movie?api_key='+KEY+'&with_genre=35',
    fetchHorrorMovies: 'discover/movie?api_key='+KEY+'&with_genre=27',
    fetchRomanceMovies: 'discover/movie?api_key='+KEY+'&with_genre=10749',
    fetchDocumentaries: 'discover/movie?api_key='+KEY+'&with_genre=99'
}
export default requests;