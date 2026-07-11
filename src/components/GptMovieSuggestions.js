import { useSelector } from "react-redux";
import MovieList from "./MovileList";

const GptMovieSuggestions = () => {
  const searchResults = useSelector((store) => store.gpt.searchResults);

  if (!searchResults) return null;

  return (
    <div className="pt-32">
      <MovieList title="Search Results" movies={searchResults} />
    </div>
  );
};

export default GptMovieSuggestions;
