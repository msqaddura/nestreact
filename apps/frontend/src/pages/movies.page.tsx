import { useEffect } from 'react';
import { searchMovies } from '../features/movie/api/movie.api';
import { MovieList } from '../features/movie/components/movie-list/movie-list';

import { SearchInput } from '../components/search/search-input';
import { useSearchParams } from 'react-router-dom';
import { Paginator } from '../components/paginator';
import { useQuery } from 'react-query';
import { Warning } from '../components/warning';
import { Loader } from '../components/loader';
import { Empty } from '../components/empty';
export const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const page = searchParams.get('page') || '1';

  const search = (query: string) => {
    setSearchParams((prev) => {
      prev.set('query', query);
      prev.set('page', '1');
      return prev;
    });
  };

  const onPageChange = (page: number) => {
    setSearchParams((prev) => {
      prev.set('page', `${page}`);
      return prev;
    });
  };

  const {
    data: movies,
    isError,
    isLoading,
    isSuccess,
  } = useQuery(['movies', query, page], () => searchMovies(query, page), {
    retry: false,
  });

  return (
    <div className="w-100">
      <SearchInput query={query} onSearch={(e) => search(e)}></SearchInput>
      {isLoading && <Loader></Loader>}
      {isError && <Warning></Warning>}
      {isSuccess &&
        (movies!.results.length === 0 ? (
          <Empty></Empty>
        ) : (
          <div>
            <MovieList movies={movies!.results}></MovieList>
            <Paginator
              page={+page}
              itemsPerPage={20}
              onPageChange={onPageChange}
              totalItems={movies!.total_results}
            />
          </div>
        ))}
    </div>
  );
};
