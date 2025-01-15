import { DetailedMovie, MovieResponse } from '../movie.types';
const url = 'http://localhost:3000/api/movie';
export const searchMovies = async (query: string, page: string) => {
  const response = await fetch(
    `${url}?query=${query || 'a'}&page=${page || '1'}`
  );
  if (!response.ok) {
    throw new Error('Failed to fetch movies');
  }
  const data: MovieResponse = await response.json();
  return data;
};

export const getMovie = async (id: number) => {
  const response = await fetch(`${url}/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch movie');
  }
  const data: DetailedMovie = await response.json();
  return data;
};

export const getSimilarMovies = async (id: number) => {
  const response = await fetch(`${url}/${id}/similar`);
  if (!response.ok) {
    throw new Error('Failed to fetch similar movies');
  }
  const data: MovieResponse = await response.json();
  return data;
};
