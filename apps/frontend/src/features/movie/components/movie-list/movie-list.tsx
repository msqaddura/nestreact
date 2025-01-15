import { Movie } from '../../movie.types';
import { MovieCard } from '../movie-card/movie-card';
import './movie-list.scss';
type Props = {
  movies: Movie[];
};
export const MovieList = ({ movies }: Props) => {
  return (
    <div className="container">
      {movies.map((movie) => (
        <MovieCard key={`${movie.id}`} movie={movie}></MovieCard>
      ))}
    </div>
  );
};
