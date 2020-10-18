import React,{useState,useEffect} from "react";
import axios from "../apis/axios"
import "./Row.css";
const imgBaseUrl = "https://image.tmdb.org/t/p/original/";

const Row =({title,fetchUrl,isLarge})=>{

    const [moviesList,getMoviesList]=useState([]);

    useEffect(()=>{
            const temp = async()=>{
                const response = await axios.get(fetchUrl);
                getMoviesList(response.data.results);
            }
            temp();
    },[fetchUrl])
    const renderMoviePosters = moviesList.map(movie=>{
        const path =isLarge?imgBaseUrl+movie.poster_path:imgBaseUrl+movie.backdrop_path;
        let classN ="";
        if(isLarge)
            classN =" rowLarge";
        return <img key = {movie.id} className = {"row_poster"+classN} src ={path} alt ={movie.name} / >
    })

    return (
        <div className ="row">
            <h2>{title}</h2>
            <div className = "row_posters">
                {renderMoviePosters}
            </div>
        </div>
    )
}

export default Row;