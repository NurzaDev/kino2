import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import {useParams} from "react-router-dom";
import Actors from "../Actors";
import Video from "../Video";
import {IoMdMenu} from "react-icons/io";
import {AiFillHeart, AiFillStar} from "react-icons/ai";
import {BsFillBookmarkFill} from "react-icons/bs";
import {LanguageContext} from "../../context";

const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState({})
    const {movieId} = useParams()
    const {language} = useContext(LanguageContext)
    const getDetails = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=${language}`)
            .then((res) => setMovieDetails(res.data))
    }
    useEffect(() => {
        getDetails(API_KEY)
    }, [language])
    console.log(movieDetails)
    console.log(movieId)
    const {poster_path,
        title,
        overview,
        runtime,
        backdrop_path,
        tagline,
        genres,
        vote_average,
        release_date} = movieDetails
    return (
        <>
            <div id="movieDetails" style={{
                background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}")`
            }}>
                <div className="container">
                    <div className="movieDetails">
                        <img src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${poster_path}`} width="380px" alt="img"/>
                        <div className="movieDetails--info">
                            <h1>{title}</h1>
                            <div className="movieDetails--info__text">
                                <h3>{release_date}  /</h3>
                                {
                                    genres?.map((el) => (
                                        <p>{el.name}</p>
                                    ))
                                }
                                <h3>   /  {Math.floor(runtime / 60)}h {runtime % 60}min</h3>
                            </div>
                            <div className="movieDetails--info__vote">
                                <div className="movieDetails--info__vote--logo">
                                    {Math.round(vote_average * 10)}%
                                </div>
                                <h2>Рейтинг</h2>
                                <button><IoMdMenu/></button>
                                <button><AiFillHeart/></button>
                                <button><AiFillStar/></button>
                                <button><BsFillBookmarkFill/></button>
                            </div>
                            <h2><i>{tagline}</i></h2>
                            <h3>Обзор</h3>
                            <p>{overview} </p>
                        </div>
                    </div>
                </div>
            </div>
            <Actors id={movieId}/>
            <Video id={movieId}/>
        </>
    );
};

export default MovieDetails;