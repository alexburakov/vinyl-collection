import { forwardRef } from 'react';
import styles from './Input.module.css';

export const Input = forwardRef(function MyInput(
  { placeholder = 'Enter data', type = 'text', register },
  ref
) {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      type={type}
      ref={ref}
      {...register}
    ></input>
  );
});
