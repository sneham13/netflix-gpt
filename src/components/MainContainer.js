import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import Videobg from "./Videobg";

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);
    if (!movies || movies.length === 0) return null;

    const mainMovie = movies[0];
    const { original_title, overview,id } = mainMovie;


    return (
        <div className="relative w-full">
            <Videobg movieId={id}/>
            <VideoTitle title={original_title} overview={overview}/>
        </div>
    );
};

export default MainContainer;