import styles from './Navbar.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';

export const Navbar: React.FC = () => {
  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} />
      <p>Navbar</p>
    </nav>
  );
};
