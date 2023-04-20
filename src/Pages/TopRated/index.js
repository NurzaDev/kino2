import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import MovieCard from "../../components/MovieCard";
import {LanguageContext} from "../../context";

const TopRated = () => {
    const [topRated, setTopRated] = useState([])
    const [active, setActive] = useState(1)
    const {language} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    const arr = [1,2,3,4,5,6,7,8,9,10]
    const getTopRated = (key) => {
        window.scroll(0,0)
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&page=${active}&language=${language}`)
            .then((res) => {
                setTopRated(res.data.results)
            })
    }

    useEffect(() => {
        getTopRated(API_KEY)
    }, [active, language])

    console.log(topRated)
    return (
        <div style={{
            background: dark === true ? "white" : "#07203a"
        }} id="popular">
            <div className="container">
                <div className="popular">
                    {
                        topRated.map((el) => (
                            <MovieCard el={el}/>
                        ))
                    }
                </div>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <button onClick={() => {
                    setActive(active === 1 ? 1 : active -1)
                }} style={{
                    color: '#fff',
                    background: '#07203a',
                    padding: '20px 30px',
                    fontSize: '26px',
                    margin: '70px 0 0 0',
                    borderRadius: '10px',
                }}>назад
                </button>
                <h1 style={{
                    color: 'white',
                    margin:'70px 20px 0 20px',
                    fontSize: '30px'
                }}>{active}</h1>
                <button onClick={() => {
                    setActive(active +1)
                }} style={{
                    color: '#fff',
                    background: '#07203a',
                    padding: '20px 30px',
                    fontSize: '26px',
                    margin: '70px 15px 0 0',
                    borderRadius: '10px',
                }}>далее</button>
                <button onClick={() => {
                    setActive(1)
                }} style={{
                    color: '#fff',
                    background: 'red',
                    padding: '10px 20px',
                    margin: '70px 0 0 0',
                    borderRadius: '10px',
                }}>занаво</button>
            </div>
        </div>
    );
};

export default TopRated;