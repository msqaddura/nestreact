import { useState } from 'react';
import './search-input.scss';
type Props = {
  query: string;
  onSearch: (search: string) => void;
};
export const SearchInput = ({ onSearch, query }: Props) => {
  const [value, setValue] = useState(query);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSearch(e.currentTarget.search.value);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.currentTarget.value);
  };
  return (
    <div className="search">
      <br />
      <form className="text-center" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          className="search__input"
          value={value}
          onChange={handleChange}
        />

        <button className="search__button" type="submit">
          Search
        </button>
      </form>
      <br />
    </div>
  );
};
