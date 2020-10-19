import React,{useState,useEffect} from "react";
import axios from "../apis/axios"
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./Row.css";

const imgBaseUrl = "https://image.tmdb.org/t/p/original/";

const Row =({title,fetchUrl,isLarge})=>{

    const [moviesList,getMoviesList]=useState([]);
    const [trailerURL,setTrailerURL] = useState("");

    useEffect(()=>{
            const temp = async()=>{
                const response = await axios.get(fetchUrl);
                getMoviesList(response.data.results);
            }
            temp();
    },[fetchUrl])

    const handleClick =(movie)=>{
        if(trailerURL){
            setTrailerURL("");
            console.log(movieTrailer);
        }
        else {
            movieTrailer(movie.title || movie.original_title || "")
            .then((url)=>{
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerURL(urlParams.get("v"));
            })
            .catch((err)=>console.log(err));
        }
    }

    const renderMoviePosters = moviesList.map(movie=>{
        const path =isLarge?imgBaseUrl+movie.poster_path:imgBaseUrl+movie.backdrop_path;
        let classN ="";
        if(isLarge)
            classN =" rowLarge";
        if(movie.backdrop_path){
            return <img onClick = {()=>handleClick(movie)} key = {movie.id} className = {"row_poster"+classN} src ={path} alt ={movie.name} / >
        }
    });

    const ops ={
        height: "390",
        width : "100%",
        playerVars : {
            autoplay : 1
        }
    };

    return (
        <div className ="row">
            <h2>{title}</h2>
            <div className = "row_posters">
                {renderMoviePosters}
            </div>
            {trailerURL&&<Youtube videoId={trailerURL} opts={ops} />}
        </div>
    )
}

export default Row;