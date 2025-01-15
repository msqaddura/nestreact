import { Link } from 'react-router-dom';
import styles from './header.module.scss';
export const Header = () => (
  <header>
    <nav>
      <Link to="/" className={styles.link}>
        Home
      </Link>
      <Link to="/movies">Movies</Link>
    </nav>
  </header>
);
