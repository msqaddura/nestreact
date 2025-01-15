import { Link } from 'react-router-dom';
import { Movie } from '../../movie.types';
import './movie-card.scss';
type Props = { movie: Movie };
export const MovieCard = ({ movie }: Props) => {
  const prefix = 'https://image.tmdb.org/t/p/w200';
  return (
    <Link to={`/movies/${movie.id}`} className="card">
      <img
        className="card__image"
        src={`${prefix}${movie.poster_path}`}
        alt={movie.title}
      />

      <p className="card__title">{movie.title}</p>
    </Link>
  );
};
