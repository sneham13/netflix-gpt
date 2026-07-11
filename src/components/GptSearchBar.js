import { useRef } from "react";

const GptSearchBar = () => {
  const searchText = useRef(null);

  const handleGptSearchClick = () => {
    console.log(searchText.current.value);
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
