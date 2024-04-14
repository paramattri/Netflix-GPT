import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesSlice";
import { API_OPTIONS, POPULAR_RESULTS } from "../utils/constants";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = async () => {
    // const response = await fetch(
    //   "https://api.themoviedb.org/3/movie/popular?page=1",
    //   API_OPTIONS
    // );
    // const data = await response.json();
    // dispatch(addPopularMovies(data.results));
    dispatch(addPopularMovies(POPULAR_RESULTS));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
