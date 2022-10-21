import { Header } from '../../components/Header';
import styles from './Cart.module.scss';
import { useSelector } from 'react-redux';
import { StoreState } from '../../store';
import { Item } from '../../components/Item';

export const CartPage: React.FC = () => {
  const { cart } = useSelector((state: StoreState) => ({
    cart: state.cart,
  }));

  const total = cart.reduce((prev, curr) => {
    return (prev += curr.item.preco * curr.quantity);
  }, 0);

  return (
    <div>
      <Header
        title="Carrinho de Compras"
        description="confira produtos que você adicionou ao carrinho"
        className={styles.header}
      />
      <div className={styles.carrinho}>
        {cart.map((c) => (
          <Item key={c.item.id} {...c.item} isCartPage />
        ))}

        <div className={styles.total}>
          <strong>Resumo da Compra</strong>
          <span>
            Subtotal:{' '}
            <strong>{new Intl.NumberFormat('pt-br', { currency: 'BRL', style: 'currency' }).format(total)}</strong>
          </span>
        </div>
      </div>
    </div>
  );
};
