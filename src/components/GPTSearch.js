import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";
import netflixBgImage from "../images/netflix-background.jpg";

const GPTSearch = () => {
  return (
    <div className="relative z-10 mx-11">
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
