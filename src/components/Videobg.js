import { useSelector } from "react-redux";
import useMovieTrailers from "../hooks/useMovieTrailers";
const Videobg = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  useMovieTrailers(movieId);
  return (
    <div>
      {
        <iframe
        className="block w-full aspect-video border-0"
          src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&disablekb=1&iv_load_policy=3"}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      }
    </div>
  );
};

export default Videobg;
