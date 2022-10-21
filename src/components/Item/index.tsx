import { Heart, ShoppingCart } from 'phosphor-react';
import { useDispatch } from 'react-redux';
import { ItemProps } from '../../mocks/items';
import { handleFavorites } from '../../store/reducers/items';
import styles from './Item.module.scss';

const iconeProps = {
  size: 24,
  color: '#041833',
};

export const Item: React.FC<ItemProps> = ({ descricao, favorito, foto, id, preco, titulo }) => {
  const dispatch = useDispatch();

  const resolveFavorites = () => {
    dispatch(handleFavorites(id));
  };

  return (
    <div className={styles.item}>
      <div className={styles['item-image']}>
        <img src={foto} alt={titulo} />
      </div>
      <div className={styles['item-descricao']}>
        <div className={styles['item-titulo']}>
          <h2>{titulo}</h2>
          <p>{descricao}</p>
        </div>
        <div className={styles['item-info']}>
          <div className={styles['item-preco']}>
            {new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(preco)}
          </div>
          <div className={styles['item-acoes']}>
            <Heart {...iconeProps} weight={favorito ? 'fill' : 'regular'} onClick={resolveFavorites} />
            <ShoppingCart
              {...iconeProps}
              color={false ? '#1875E8' : iconeProps.color}
              className={styles['item-acao']}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
