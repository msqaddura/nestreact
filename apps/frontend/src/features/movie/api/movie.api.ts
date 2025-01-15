import { DetailedMovie, MovieResponse } from '../movie.types';
const url = 'http://localhost:3000/api/movie';
export const searchMovies = async (query: string, page: string) => {
  const response = await fetch(
    `${url}?query=${query || 'a'}&page=${page || '1'}`
  );
  const data: MovieResponse = await response.json();
  return data;
};

export const getMovie = async (id: number) => {
  const response = await fetch(`${url}/${id}`);
  const data: DetailedMovie = await response.json();
  return data;
};

export const getSimilarMovies = async (id: number) => {
  const response = await fetch(`${url}/${id}/similar`);
  const data: MovieResponse = await response.json();
  return data;
};
