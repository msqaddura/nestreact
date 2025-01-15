// Uncomment this line to use CSS modules
import styles from './app.module.scss';
import { Header } from '../components/header/header';
import { Home } from '../pages/home/home';
import { MoviePage } from '../pages/movie.page';
import { MoviesPage } from '../pages/movies.page';
import { Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <section className={styles.section}>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/movies" element={<MoviesPage></MoviesPage>} />
          <Route path="/movies/:id" element={<MoviePage></MoviePage>} />
        </Routes>
      </section>

      {/* END: routes */}
    </div>
  );
}

export default App;
