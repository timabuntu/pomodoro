import styles from './Button.module.css';

interface ButtonProps {
  color?: 'primary' | 'secondary' | 'danger' | 'success' | 'warning';
}

export function Button({ color = 'primary' }) {
  return (
    <button className={`${styles.button} ${styles[color]}`}>Enviar</button>
  );
}
