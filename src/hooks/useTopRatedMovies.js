import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { API_OPTIONS, TOP_RATED_RESULTS } from "../utils/constants";
import { useEffect } from "react";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    // const response = await fetch(
    //   "https://api.themoviedb.org/3/movie/top_rated?page=1",
    //   API_OPTIONS
    // );
    // const data = await response.json();
    // dispatch(addTopRatedMovies(data.results));
    dispatch(addTopRatedMovies(TOP_RATED_RESULTS));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
