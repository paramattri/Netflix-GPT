import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="pl-11 mb-4">
      <h1 className="text-xl font-semibold mb-2 text-white">{title}</h1>
      <div className="flex overflow-x-scroll [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-4">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
