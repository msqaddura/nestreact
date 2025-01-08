// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import { Header } from '../components/header';
import { MovieList } from '../features/movie/components/movie-list';
import { Home } from '../pages/home';
import { Movies } from '../pages/movies';
import NxWelcome from './nx-welcome';

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  return (
    <div>
      <Header></Header>
      {/* <NxWelcome title="frontend" /> */}

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />

      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/movies" element={<Movies></Movies>} />
      </Routes>
      {/* END: routes */}
    </div>
  );
}

export default App;
