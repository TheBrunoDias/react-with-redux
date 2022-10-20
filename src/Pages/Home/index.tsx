import { Header } from '../../components/Header';
import styles from './Home.module.scss';
import Initial from '../../assets/inicial.png';

export const Home: React.FC = () => {
  return (
    <>
      <Header
        title="Classificados Tech"
        description="Compre diversos tipos de produtos no melhor site do Brasil!"
        image={Initial}
        className={styles.header}
      />
    </>
  );
};
