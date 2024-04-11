import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { API_OPTIONS, NOW_PLAYING_RESULTS } from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    // const response = await fetch(
    //   "https://api.themoviedb.org/3/movie/now_playing?page=1",
    //   API_OPTIONS
    // );

    // const data = await response.json();
    // dispatch(addNowPlayingMovies(data.results))
    dispatch(addNowPlayingMovies(NOW_PLAYING_RESULTS));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
