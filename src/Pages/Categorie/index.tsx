import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Item } from '../../components/Item';
import { StoreState } from '../../store';
import styles from './Categorie.module.scss';

export const CategoriePage: React.FC = () => {
  const { nomeCategoria } = useParams();
  const navigate = useNavigate();
  const { categorie, items } = useSelector((state: StoreState) => ({
    categorie: state.categories.find((c) => c.id === nomeCategoria),
    items: state.items.filter((i) => i.categoria === nomeCategoria),
  }));

  if (!categorie) {
    navigate('/');
    return <></>;
  }

  return (
    <div>
      <Header title={categorie.nome} description={categorie.descricao} image={categorie.thumbnail} />
      <div className={styles.itens}>
        {items?.map((i) => (
          <Item key={i.id} {...i} />
        ))}
      </div>
    </div>
  );
};
