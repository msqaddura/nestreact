import { useEffect, useState } from 'react';
import { searchMovies } from '../features/movie/api/movie.api';
import { MovieList } from '../features/movie/components/movie-list/movie-list';
import { MovieResponse } from '../features/movie/movie.types';
import { SearchInput } from '../components/search/search-input';
import { useSearchParams } from 'react-router-dom';
import { Paginator } from '../components/paginator';

export const MoviesPage = () => {
  const [data, setData] = useState<MovieResponse>();
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
  useEffect(() => {
    searchMovies(query, page).then((data) => setData(data));
  }, [query, page]);
  return (
    <div className="w-100">
      <SearchInput query={query} onSearch={(e) => search(e)}></SearchInput>
      {data && (
        <div>
          <MovieList movies={data.results}></MovieList>
          <Paginator
            page={+page}
            itemsPerPage={20}
            onPageChange={onPageChange}
            totalItems={data.total_results}
          />
        </div>
      )}
    </div>
  );
};
