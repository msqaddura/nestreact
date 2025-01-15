import { useParams } from 'react-router-dom';
import { MovieDetails } from '../features/movie/components/movie-details/movie-details';
import { useEffect, useState } from 'react';
import { getMovie } from '../features/movie/api/movie.api';
import { DetailedMovie } from '../features/movie/movie.types';

export const MoviePage = () => {
  const { id } = useParams();
  const [details, setDetails] = useState<DetailedMovie | null>(null);

  useEffect(() => {
    getMovie(+id!).then((data) => setDetails(data));
  }, []);

  return details && <MovieDetails movie={details}></MovieDetails>;
};
