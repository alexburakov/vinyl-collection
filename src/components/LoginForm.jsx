import styles from './LoginForm.module.css';
import { Button } from './UI/Button';
import { Input } from './UI/Input';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../store/authSlice';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth);

  const { register, handleSubmit } = useForm();

  const [isLoginForm, setIsLoginForm] = useState(
    useSelector((state) => state.auth.user)
  );

  const isLoginToggle = () => {
    setIsLoginForm(!isLoginForm);
  };

  const submitHandler = async (data) => {
    console.log('Enter login and pass: ', data);
    try {
      await dispatch(Login(data));
    } catch (err) {
      console.error('❌ Error:', err);
    }
  };

  console.log('redux store: ', isLogin);

  return (
    <div className={styles.container__form}>
      <h2 className={styles.form__header}>
        {isLoginForm ? 'Welcome back' : 'Create new account'}
      </h2>
      <p className={styles.form__subheader}>
        {isLoginForm ? 'Not a member? ' : 'Already a member? '}
        <a className={styles.subheader__link} onClick={isLoginToggle}>
          {isLoginForm ? 'Sign in' : 'Log in'}
        </a>
      </p>
      <div className={styles.form__login}>
        <form onSubmit={handleSubmit(submitHandler)}>
          <Input
            placeholder={'E-Mail'}
            type={'email'}
            register={register('email', { required: true })}
          />
          <Input
            placeholder={'Password'}
            register={register('password', { required: true, maxLength: 20 })}
          />
          <p className={styles.mg_1}></p>
          <Button>{isLoginForm ? 'Log in' : 'Create account'}</Button>
        </form>
        <span className={styles.form__sep}>or</span>
        <Button>
          {isLoginForm ? 'Log in with Google' : 'Sign up with Google'}
        </Button>
      </div>
    </div>
  );
};
