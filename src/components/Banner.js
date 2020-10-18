import React,{useState,useEffect} from 'react'
import axios from "../apis/axios"
import requests from "../apis/requests"
import "./Banner.css"

export default ()=> {

    const[movie,setMovie] = useState([]);

    useEffect(()=>{
        const temp = async ()=>{
            const response =await axios.get(requests.fetchNetflixOriginals);
            setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length-1)]);
        }
        temp();
    },[])
    console.log(movie)
    return (
        <header 
            className="banner"
            style={{ 
                backgroundSize:"cover",
                backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(movie.backdrop_path).concat('")'),
                backgroundPosition :"center center"
            }} 
        >
            <div className="banner_contents">
                <h1>{movie.name}</h1>
                <div className ="banner_buttons">
                    <div className ="banner_button">Play</div>
                    <div className ="banner_button">My List</div>
                </div>
                <div className="banner_description">
                    {movie.overview} 
                </div>
            </div>
        </header>
    )
}