import { api_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailers=(movieId)=>{
const dispatch = useDispatch();

  useEffect(() => {
    const getMovieVideos = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        api_options,
      );
      const videos = await data.json();

      const filteredTrailers = videos.results.filter(
        (video) => video.type === "Trailer",
      );

      const trailer = filteredTrailers.length
        ? filteredTrailers[0]
        : videos.results[0];
      dispatch(addTrailerVideo(trailer));
    };

    getMovieVideos();
  }, [movieId]);

}


export default useMovieTrailers;