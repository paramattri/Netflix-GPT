import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import MainMovieContainer from "./MainMovieContainer";
import SecondaryMovieContainer from "./SecondaryMovieContainer";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();

  return (
    <div>
      <MainMovieContainer />
      <SecondaryMovieContainer />
    </div>
  );
};

export default Browse;
