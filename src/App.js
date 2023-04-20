import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Popular from "./Pages/Popular";
import TopRated from "./Pages/TopRated";
import MovieDetails from "./Pages/MovieDetails";
import ActorsDetails from "./Pages/ActorsDetails";
import Search from "./Pages/Search";

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
            <Route path={"/"} element={ <Home/> }/>
            <Route path={"/popular"} element={ <Popular/> }/>
            <Route path={"/topRated"} element={ <TopRated/> }/>
            <Route path={"/movie/details/:movieId"} element={ <MovieDetails/> }/>
            <Route path={"/actors/details/:personId"} element={ <ActorsDetails/> }/>
            <Route path={"/search/search_movie/:movieName"} element={ <Search/> }/>
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
