import styles from './LoginForm.module.css';
import { Button } from './UI/Button';
import { Input } from './UI/Input';

import { useForm } from 'react-hook-form';

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const submitHandler = (data) => {
    console.log(data);
  };

  return (
    <div className={styles.container__form}>
      <h2 className={styles.form__header}>{'Create new account'}</h2>
      <p className={styles.form__subheader}>
        {'Already a member? '}
        <a className={styles.subheader__link} href="#">
          {'Log in'}
        </a>
      </p>
      <div className={styles.form__login}>
        <form onSubmit={handleSubmit(submitHandler)}>
          <Input
            placeholder={'Password'}
            register={register('lastName', { required: true, maxLength: 20 })}
          />
          <p className={styles.mg_1}></p>
          <Button>Create account</Button>
        </form>
        <span className={styles.form__sep}>or</span>
        <Button>Sign up with Google</Button>
      </div>
    </div>
  );
};
