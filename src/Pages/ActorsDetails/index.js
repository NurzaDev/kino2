import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API";
import Film from "../Film";
import {LanguageContext} from "../../context";

const ActorsDetails = () => {
    const [actor, setActor] = useState({})
    const [bio,setBio] = useState(300)
    const {personId} = useParams()
    const {language} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    const getActor = (key) => {
        axios(`https://api.themoviedb.org/3/person/${personId}?api_key=${key}&language=${language}`)
            .then((res) => setActor(res.data))
    }
    function getOpen(text){
        if (bio === 300){
            return setBio(text.length)
        }
        else {
            return setBio(300)
        }
    }
    useEffect(() => {
        getActor(API_KEY)
    }, [language])
    console.log(actor)
    const {name,
        profile_path,
        biography,
        birthday,
        place_of_birth,
        also_known_as} = actor
    return (
        <div style={{
            background: dark === true ? "white" : "#07203a",
            color: dark === true ? "black" : "white"
        }}id="actor">
            <div className="container">
                <div className="actor">
                    <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`} alt=""/>
                    <div className="actor--card">
                    <h1>{name}</h1>
                        <h3>Дата рождения: {birthday}</h3>
                        <h3>Место рождения: {place_of_birth}</h3>
                        <h3>Также известность как: {also_known_as}</h3>
                        <h2>Биография:</h2>
                    <p >{biography?.slice(0,bio)}</p>
                        <span style={{cursor:"pointer" ,color:"blue",fontSize:"20px"}} onClick={() => getOpen(biography)} >{
                            bio === 300 ? "Читать еще>" : "закрыть"
                        }</span>
                        <Film id={personId}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ActorsDetails;