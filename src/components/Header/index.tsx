import styles from './Header.module.scss';

type Props = React.HTMLAttributes<HTMLElement> & {
  title: string;
  description: string;
  image: string;
};

export const Header: React.FC<Props> = ({ title, description, image, className = '', ...props }) => {
  return (
    <header {...props} className={`${styles.header} ${className}`}>
      <div className={styles['header-texto']}>
        <h1>{title}</h1>
        <h2>{description}</h2>
      </div>
      <div className={styles['header-imagem']}>
        <img src={image} alt={title} />
      </div>
    </header>
  );
};
