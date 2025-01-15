import { Link } from 'react-router-dom';
import image from '../../assets/family-watching.png';
import styles from './home.module.scss';
export const Home = () => (
  <div className={styles.wrapper}>
    <img src={image} alt="home" />
    <p className="text-white">watch movies with family & friends!</p>
    <Link className={styles.link} to="/movies">
      <b>Start Watching!</b>
    </Link>
  </div>
);
