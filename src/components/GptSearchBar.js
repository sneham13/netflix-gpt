import { useRef } from "react";
import { useDispatch } from "react-redux";
import { api_options } from "../utils/constants";
import { addSearchResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleGptSearchClick = async () => {
    const query = searchText.current.value;

    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}`,
      api_options,
    );

    const data = await response.json();

    if (data.success === false) {
      console.error(data.status_message);
      return;
    }

    dispatch(addSearchResults(data.results));
  };

  return (
    <div className="flex justify-center">
      <form className="w-full max-w-2xl mt-36 flex gap-3 px-4">
        <input
          ref={searchText}
          type="text"
          placeholder="What do you want to watch today?"
          className="flex-1 p-3 rounded bg-black/70 text-white placeholder-zinc-400 border border-zinc-500 outline-none focus:ring-2 focus:ring-white"
        />
        <button
          type="button"
          onClick={handleGptSearchClick}
          className="px-6 py-3 rounded bg-red-600 text-white font-semibold hover:bg-red-700 transition-colors"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
