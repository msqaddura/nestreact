import { Movie } from '../movie.types';

export const getMany = async () => {
  const response = await fetch('http://localhost:3000/api/movie');
  const data: Movie[] = await response.json();
  return data;
};
