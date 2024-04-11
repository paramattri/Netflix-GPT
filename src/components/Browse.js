import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainMovieContainer from "./MainMovieContainer";
import SecondaryMovieContainer from "./SecondaryMovieContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <MainMovieContainer />
      <SecondaryMovieContainer />
    </div>
  );
};

export default Browse;
