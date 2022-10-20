import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer';
import { Navbar } from '../Navbar';
import styles from './Layout.module.scss';

export const Layout: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles['container-outlet']}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
