import { Movie } from '../movie.types';
type Props = {
  data: Movie[];
};
export const MovieList = ({ data }: Props) => {
  return (
    <div>
      {data.map((movie) => (
        <p>{movie.title}</p>
      ))}
      <h1>Movie List</h1>
    </div>
  );
};
