import { useEffect } from "react";
import { API_OPTIONS, VIDEO_TRAILER } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    // const response = await fetch(
    //   `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
    //   API_OPTIONS
    // );
    // const data = await response.json();
    // const trailer =
    //   data.results.filter((video) => video.type === "Trailer")[0] ||
    //   data.results[0];
    const trailer = VIDEO_TRAILER[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
