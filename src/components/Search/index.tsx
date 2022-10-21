import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../store';
import { updateSearch } from '../../store/reducers/search';
import styles from './Search.module.scss';

export const Search: React.FC = () => {
  const { search } = useSelector((state: StoreState) => ({
    search: state.search,
  }));
  const dispatch = useDispatch();

  const handleChange = (e: string) => {
    dispatch(updateSearch(e));
  };

  return (
    <>
      <div className={styles.busca}>
        <input
          type="text"
          placeholder="O que você procura?"
          className={styles.input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </>
  );
};
