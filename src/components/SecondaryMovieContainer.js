import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryMovieContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black pb-2">
      <div className="-mt-80 relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
      </div>
    </div>
  );
};

export default SecondaryMovieContainer;
