import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import MovieList from "./MovileList";

const SecondaryContainer=()=>{

    const movies= useSelector(store=>store.movies);
return(
    movies.nowPlayingMovies&&(
     <div className="pt-4 pb-16">
    <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}></MovieList>
    <MovieList title={"Popular"} movies={movies.popularmovies}></MovieList>

    {/* <MovieList title={"Trending"} movies={movies.nowPlayingMovies}></MovieList>
    <MovieList title={"Upcoming Movies"} movies={movies.nowPlayingMovies}></MovieList> */}

    </div>
    ))
}

export default SecondaryContainer;