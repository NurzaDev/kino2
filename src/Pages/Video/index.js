import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API";
import {LanguageContext} from "../../context";

const Video = ({id}) => {
    const [video, setVideo] = useState([])
    const {dark} = useContext(LanguageContext)
    const getVideo = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${key}&language=ru-RU`)
            .then((res) => setVideo(res.data.results))
    }
    useEffect(() => {
        getVideo(API_KEY)
    }, [])

    console.log("VIDEO",video)
    return (
        <div style={{
            background: dark === true ? "white" : "black",
            color: dark ? "black" : "white"
        }} id="video">
            <div className="container">
                <h1>Медиа: </h1>
                <div className="video">
                    {
                        video.slice(0 ,10).map((el) => (
                            <div className="video--card">
                                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${el.key}`}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Video;