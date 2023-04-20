import React, {useContext, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import logo from "../../img/img.svg"
import {BsMoon, BsSun} from "react-icons/bs";
import {LanguageContext} from "../../context";

const Header = () => {
    const [search, setSearch] = useState("")
    const {setLanguage} = useContext(LanguageContext)
    const {language} = useContext(LanguageContext)
    const {setDark} = useContext(LanguageContext)
    console.log(language)
    const nav = useNavigate()
    const input = (e) => {
        if (e.key === "Enter") {
            nav(`/search/search_movie/${search}`)
        }
    }
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <img src={logo} alt="img" />
                    <div className="header--nav">
                        <NavLink to={"/"} className="header--nav__link">Home</NavLink>
                        <NavLink to={"/popular"} className="header--nav__link">Popular</NavLink>
                        <NavLink to={"/topRated"} className="header--nav__link">Top Rated</NavLink>
                    </div>
                    <div className="header--info">
                        <select onChange={(e) => setLanguage(e.target.value)}>
                            <option value="en-US">EN</option>
                            <option value="ru-RU">RU</option>
                            <option value="fr-FR">FR</option>
                        </select>
                    </div>
                    <div className="header--const">
                        <button onClick={() => setDark(true)} className="btn"><BsSun/></button>
                        <button onClick={() => setDark(false)}><BsMoon/></button>
                    </div>
                    <div className="header--btn">
                        <input type="text" placeholder={"text"}

                               onKeyDown={(event) => {
                                   input(event)
                               }}
                        onChange={(e) => {
                            setSearch(e.target.value)
                        }}
                        />
                        <button onClick={() => nav(`/search/search_movie/${search}`)}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;