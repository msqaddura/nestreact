import { useEffect, useState } from 'react';
import { getMany } from '../features/movie/api/movie.api';
import { MovieList } from '../features/movie/components/movie-list';
import { Movie } from '../features/movie/movie.types';

export const Movies = () => {
  const [data, setData] = useState<Movie[]>([]);
  useEffect(() => {
    getMany().then((data) => setData(data));
  }, []);
  return (
    <div>
      <MovieList data={data}></MovieList>
    </div>
  );
};
