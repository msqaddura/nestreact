import { useParams } from 'react-router-dom';
import { MovieDetails } from '../features/movie/components/movie-details/movie-details';
import { useEffect, useState } from 'react';
import { getMovie } from '../features/movie/api/movie.api';
import { DetailedMovie } from '../features/movie/movie.types';
import { useQuery } from 'react-query';
import { Loader } from '../components/loader';
import { Warning } from '../components/warning';

export const MoviePage = () => {
  const { id } = useParams();

  const {
    data: details,
    isError,
    isLoading,
    isSuccess,
  } = useQuery(['movies', id], () => getMovie(+id!), {
    retry: false,
  });

  return (
    <>
      {' '}
      {isSuccess && <MovieDetails movie={details!}></MovieDetails>}
      {isLoading && <Loader />}
      {isError && <Warning></Warning>}
    </>
  );
};
