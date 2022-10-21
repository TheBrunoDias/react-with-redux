import styles from './Navbar.module.scss';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { ShoppingCart } from 'phosphor-react';
import { Search } from '../Search';

export const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  return (
    <nav className={styles.nav}>
      <Logo className={styles.logo} />
      <div>
        <Link
          to="/"
          className={classNames(styles.link, {
            [styles.selected]: pathname === '/',
          })}
        >
          Página Inicial
        </Link>
      </div>

      <div className={styles.busca}>
        <Search />
      </div>
      <div className={styles.icones}>
        <Link to="/carrinho">
          <ShoppingCart color="#ffffff" weight={pathname === '/carrinho' ? 'fill' : 'regular'} size={24} />
        </Link>
      </div>
    </nav>
  );
};
