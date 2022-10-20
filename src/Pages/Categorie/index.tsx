import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Header } from '../../components/Header';
import { StoreState } from '../../store';

export const CategoriePage: React.FC = () => {
  const { nomeCategoria } = useParams();
  const navigate = useNavigate();
  const categorie = useSelector((state: StoreState) => state.categories.find((c) => c.id === nomeCategoria));

  if (!categorie) {
    navigate('/');
    return <></>;
  }

  return (
    <div>
      <Header title={categorie.nome} description={categorie.descricao} image={categorie.thumbnail} />
    </div>
  );
};
