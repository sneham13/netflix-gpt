import { useMemo } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  const moviesWithPosters = useMemo(
    () => (movies ?? []).filter((movie) => movie.poster_path),
    [movies],
  );

  if (moviesWithPosters.length === 0) return null;

  return (
    <div className="px-8 py-4 bg-black">
      <h1 className="text-white text-xl md:text-2xl font-semibold mb-3">
        {title}
      </h1>
      <div className="flex gap-3 overflow-x-scroll pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {moviesWithPosters.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
