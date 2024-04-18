import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const { gptRecommendedMovies, gptRecommendedMovieResults } = useSelector(
    (store) => store.gpt
  );

  if (!gptRecommendedMovies) return null;

  return (
    <div>
      <div>
        {gptRecommendedMovies.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={gptRecommendedMovieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GPTMovieSuggestions;
