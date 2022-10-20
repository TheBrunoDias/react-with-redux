import { Header } from '../../components/Header';
import styles from './Home.module.scss';
import Initial from '../../assets/inicial.png';

import { categories } from '../../mocks/categories';
import { useNavigate } from 'react-router-dom';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header
        title="Classificados Tech"
        description="Compre diversos tipos de produtos no melhor site do Brasil!"
        image={Initial}
        className={styles.header}
      />

      <div className={styles.categorias}>
        <div className={styles['categorias-title']}>
          <h1>Categorias</h1>
        </div>
        <div className={styles['categorias-container']}>
          {categories.map((c, i) => (
            <div key={i} onClick={() => navigate(`/categoria/${c.id}`)}>
              <img src={c.thumbnail} alt={c.nome} />
              <h1>{c.nome}</h1>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
