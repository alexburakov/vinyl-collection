import styles from './Input.module.css';

export const Input = ({ placeholder = 'Enter data', type = 'text' }) => {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      type={type}
    ></input>
  );
};
