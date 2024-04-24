import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const { gptRecommendedMovies, gptRecommendedMovieResults } = useSelector(
    (store) => store.gpt
  );

  if (!gptRecommendedMovies) return null;

  return (
    <div className="pr-2 mt-4 md:mt-0">
      <div>
        {gptRecommendedMovies.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={gptRecommendedMovieResults[index].slice(0, 7)}
          />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
