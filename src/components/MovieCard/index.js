import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {LanguageContext} from "../../context";

const MovieCard = ({el}) => {
    const {dark} = useContext(LanguageContext)
    return (
        <div className="popular--card">
            <Link to={`/movie/details/${el.id}`}>
                <img src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>
            </Link>
            <h1 style={{
                color: dark === true ? "black" : "white",
            }}>{el.title}</h1>
            <p style={{
                color: dark === true ? "black" : "white",
            }}> дата выход: {el.release_date}</p>
        </div>
    );
};

export default MovieCard;