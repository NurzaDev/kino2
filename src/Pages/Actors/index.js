import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import logo from "../../img/logo.jpg"
import Slider from "react-slick";
import {Link} from "react-router-dom";
import {LanguageContext} from "../../context";

const Actors = ({id}) => {
    const [actors, setActors] = useState([])
    const {dark} = useContext(LanguageContext)
    const {language} = useContext(LanguageContext)
    const getActors = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=${language}`)
            .then((res) => setActors(res.data.cast))
    }
    useEffect(() => {
        getActors(API_KEY)
    }, [language])
    console.log(actors)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 3
    };
    return (
        <div style={{
            background: dark === true ? "white" : "black",
            color: dark === true ? "black" : "white"
        }} id="actors">
            <div className="container">
                <h1>В главных ролях:</h1>
                <div className="actors">
                    <Slider {...settings}>
                        {
                            actors.map((el) => (
                                <div className="actors--card">
                                    {
                                        el.profile_path ?
                                            <Link to={`/actors/details/${el.id}`}><img src={`https://www.themoviedb.org/t/p/w138_and_h175_face/${el.profile_path}`}/></Link>
                                            : <img src={logo} width={160} />
                                    }
                                    <h3>{el.name}</h3>
                                    <h5>{el.character}</h5>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default Actors;