import { LOGIN_URL } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";

const GptSearch = () => {
  return (
    <div className="relative w-full min-h-screen">
      <img
        src={LOGIN_URL}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-10 opacity-40"
      />
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
