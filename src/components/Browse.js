import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse=()=>{
   useNowPlayingMovies();
   usePopularMovies();

   const showGptSearch= useSelector(store=> store.gpt.showGptSearch);

  

    return (
        <div className="bg-black min-h-screen">
            <Header/>
            {showGptSearch ? (<GptSearch/>) :   (
           <>
           <MainContainer/>
            <SecondaryContainer/>
            </>
        ) }

        </div>
    )
}
export default Browse;