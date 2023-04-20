import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import {useParams} from "react-router-dom";
import MovieCard from "../../components/MovieCard";
import {LanguageContext} from "../../context";

const Search = () => {
    const [search, setSearch] = useState([])
    const {movieName} = useParams()
    const {language} = {LanguageContext}
    const {dark} = useContext(LanguageContext)
    const getSearch = (key) => {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}&language=${language}`)
            .then((res) => {
                setSearch(res.data.results)
            })
    }
    useEffect(() => {
        getSearch(API_KEY)
    },[search, language])
    console.log(search)
    return (
        <div style={{
            background: dark === true ? "white" : "#07203a",
            color: dark === true ? "black" : "white"
        }} id="popular">
            <div className="container">
                <div className="popular">
                    {
                        search.map((el) => (
                            <MovieCard el={el}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Search;
