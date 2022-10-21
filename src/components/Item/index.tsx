import classNames from 'classnames';
import { Heart, ShoppingCart, Trash } from 'phosphor-react';
import { useDispatch, useSelector } from 'react-redux';
import { ItemProps } from '../../mocks/items';
import { StoreState } from '../../store';
import { addProductToCard, removeProductFromCart } from '../../store/reducers/cart';
import { handleFavorites } from '../../store/reducers/items';
import styles from './Item.module.scss';

const iconeProps = {
  size: 24,
  color: '#041833',
};

export const Item: React.FC<ItemProps & { isCartPage?: boolean }> = (props) => {
  const { descricao, favorito, foto, id, preco, titulo, isCartPage } = props;
  const dispatch = useDispatch();
  const { cart } = useSelector((state: StoreState) => ({
    cart: state.cart,
  }));

  const isProductInCart = () => cart.find((i) => i.item.id === id);

  const resolveFavorites = () => {
    dispatch(handleFavorites(id));
  };

  const resolveAddToCart = () => {
    dispatch(addProductToCard(props));
  };

  const resolveRemoveFromCart = () => {
    dispatch(removeProductFromCart(id));
  };

  return (
    <div
      className={classNames(styles.item, {
        [styles.itemNoCarrinho]: isCartPage,
      })}
    >
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
              color={isProductInCart() ? '#1875E8' : iconeProps.color}
              className={styles['item-acao']}
              onClick={resolveAddToCart}
            />
            <span>{isProductInCart()?.quantity}</span>
            {isProductInCart() && (
              <Trash
                {...iconeProps}
                color={isProductInCart() ? '#e85a18' : iconeProps.color}
                className={styles['item-acao']}
                onClick={resolveRemoveFromCart}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
