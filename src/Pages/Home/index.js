import React, {useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";

const Home = () => {
    const [home, setHome] = useState([])
    const getHome = (key) => {
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=ru-RU&page=1`)
            .then((res) => {
                setHome(res.data.results)
            })
    }
    useEffect(() => {
        getHome(API_KEY)
    }, [])
    console.log(home)
    // const {backdrop_path} = home
    return (
        <div id="home" style={{
            // background: `url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}")`
        }}>
            <div className="container">
                <h1>Добро пожаловать.</h1>
                <h3>Миллионы фильмов, сериалов и людей. Исследуйте сейчас.</h3>
                <div className="home">
                    {
                        home.map((el) => (
                            <img src={`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${el.backdrop_path}`} width={1000} alt=""/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;