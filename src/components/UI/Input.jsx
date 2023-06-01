import { forwardRef } from 'react';
import styles from './Input.module.css';

export const Input = forwardRef(function MyInput(
  { placeholder = 'Enter data', type = 'text', register, onChangeInput },
  ref
) {
  return (
    <input
      onChange={(e) => {
        onChangeInput(e.target.value);
      }}
      className={styles.input}
      placeholder={placeholder}
      type={type}
      ref={ref}
      {...register}
    ></input>
  );
});
