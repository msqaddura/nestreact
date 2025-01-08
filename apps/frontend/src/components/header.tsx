import { Link } from 'react-router-dom';

export const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
    </nav>
  </header>
);
