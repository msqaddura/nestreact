export const SearchInput = () => (
  <form onSubmit={(e) => e.preventDefault()}>
    <input type="search" />

    <button type="submit">Search</button>
  </form>
);
