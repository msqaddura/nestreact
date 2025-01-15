import { useEffect, useState } from 'react';
import { DetailedMovie, MovieResponse } from '../../movie.types';
import './movie-details.scss';
import { getSimilarMovies } from '../../api/movie.api';
import { MovieList } from '../movie-list/movie-list';
type Props = { movie: DetailedMovie };

export const MovieDetails = ({ movie }: Props) => {
  const prefix = 'https://image.tmdb.org/t/p/original';
  const [similar, setSimilar] = useState<MovieResponse>();

  useEffect(() => {
    getSimilarMovies(movie.id).then((data) => setSimilar(data));
  }, []);
  return (
    <div className="movie-details">
      <div className="movie-details__info">
        <h1 className="text-white">{movie.title}</h1>

        <img
          style={{ maxWidth: '100%' }}
          src={`${prefix}${movie.backdrop_path}`}
          alt="movie poster"
        />
        <br />
        <br />
        <div>
          {movie.genres.map((genre) => (
            <span className="movie-details__badge">{genre.name}</span>
          ))}
        </div>
        <br />
        <hr />
      </div>
      <br />
      <h2 className="text-white">Similar Movies</h2>
      {similar && <MovieList movies={similar.results}></MovieList>}
    </div>
  );
};
