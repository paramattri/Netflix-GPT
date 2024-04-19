import { useEffect } from "react";
import { API_OPTIONS, VIDEO_TRAILER } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

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
    if (!trailerVideo) getMovieVideos();
  }, []);
};

export default useMovieTrailer;
