import { useRef } from "react";
import openai from "../utils/openai";

const GPTSearchBar = () => {
  const searchText = useRef(null);
  const handleGPTSearch = async () => {
    const gptQuery = `Act as a Movie Recommendation system and suggest some movies for the query ${searchText.current.value}. Only give me names of 5 movies, comma separated like the example result given ahead. Example Result: MovieName1, MovieName2, MovieName3, MovieName4, MovieName5`;

    const gptSearchResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(gptSearchResults.choices?.[0]?.message?.content);
  };

  return (
    <div className="bg-black/75 h-36 flex items-center rounded-md">
      <form
        className="flex justify-around items-center w-full"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          className="px-5 h-[50px] w-[70%] rounded-[4px] bg-neutral-700 text-white focus:outline-none"
          type="text"
          placeholder="What would you like to watch today?"
          ref={searchText}
        />
        <button
          className="px-6 py-4 w-[10%] text-white bg-red-600 rounded-[4px] font-medium"
          onClick={handleGPTSearch}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
