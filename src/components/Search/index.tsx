import styles from './Search.module.scss';

export const Search: React.FC = () => {
  return (
    <>
      <div className={styles.busca}>
        <input type="text" placeholder="O que você procura?" className={styles.input} />
      </div>
    </>
  );
};
