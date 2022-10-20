import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react';
import styles from './Footer.module.scss';

const iconsProps = {
  color: '#ffffff',
  size: 24,
};

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <FacebookLogo {...iconsProps} />
        <TwitterLogo {...iconsProps} />
        <InstagramLogo {...iconsProps} />
      </div>
      <span>Desenvolvido por Bruno.</span>
    </footer>
  );
};
