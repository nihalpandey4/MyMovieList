import Axios from "axios";

export default Axios.create({
    baseURL : "https://api.themoviedb.org/3/"
});
