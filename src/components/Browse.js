import { useDispatch } from "react-redux";
import { api_options } from "../utils/constants";
import Header from "./Header";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer"
const Browse=()=>{
   useNowPlayingMovies();
   
    return (
        <div>
            <Header/>
            <MainContainer/>
        </div>
    )
}
export default Browse;