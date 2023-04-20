import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import MovieCard from "../../components/MovieCard";
import {LanguageContext} from "../../context";

const Popular = () => {
    const [popular, setPopular] = useState([])
    const [active, setActive] = useState(1)
    const arr = [1,2,3,4,5,6,7,8,9,10]
    const {language} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    const getPopular = (key) => {
        window.scroll(0,0)
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${active}`)
            .then((res) => {
                setPopular(res.data.results)
            })
    }

    useEffect(() => {
        getPopular(API_KEY)
    }, [active, language])

    console.log(popular)
    return (
        <div id="popular"  style={{
            background: dark === true ? "white" : "#07203a"
        }}>
            <div className="container">
                <div className="popular">
                    {
                        popular.map((el) => (
                            <MovieCard el={el}/>

                        ))
                    }
                </div>
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
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
                }}>назад</button>
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
                }}>return</button>
                {/*{*/}
                {/*    arr.map((btn) => (*/}
                {/*        <button onClick={() => {*/}
                {/*            setActive(btn)*/}
                {/*        }} style={{*/}
                {/*            color:'#fff',*/}
                {/*            background: 'blue',*/}
                {/*            padding: '10px 20px',*/}
                {/*            margin: '70px 15px 0 0',*/}
                {/*            borderRadius: '10px',*/}
                {/*        }}>{btn}</button>*/}
                {/*    ))*/}
                {/*}*/}
            </div>
        </div>
    );
};

export default Popular;