import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import {Link} from "react-router-dom";
import {LanguageContext} from "../../context";

const Film = ({id}) => {
    const [film, setFilm] = useState([])
    const {language} = useState(LanguageContext)
    const getFilm = (key) => {
        axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=${language}`)
            .then((res) => setFilm(res.data.cast))
    }
    useEffect(() => {
        getFilm(API_KEY)
    }, [language])
    console.log(film)
    return (
        <div id="film">
            <h2>Известность за</h2>
            <div className="film">
                {
                    film.map((el) => (
                        <div className="film--card">
                            <Link to={`/movie/details/${el.id}`}>
                                <img src={`https://www.themoviedb.org/t/p/w150_and_h225_bestv2/${el.poster_path}`} alt=""/>
                            </Link>
                            <h5>{el.title}</h5>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Film;