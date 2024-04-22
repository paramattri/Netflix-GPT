import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GPTSearch from "./GPTSearch";
import MainMovieContainer from "./MainMovieContainer";
import SecondaryMovieContainer from "./SecondaryMovieContainer";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt.showGPTSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className={`${!showGPTSearch && "mt-[-100px]"}`}>
      {showGPTSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainMovieContainer />
          <SecondaryMovieContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
