import styles from './LoginForm.module.css';
import { Button } from './UI/Button';
import { Input } from './UI/Input';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  const [isLoginForm, setIsLoginForm] = useState(
    useSelector((state) => state.auth.user)
  );

  const isLoginToggle = () => {
    setIsLoginForm(!isLoginForm);
  };

  const submitHandler = (data) => {
    const url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAFgPDCGK_qe_vSCjpoyodb_8DQPCrGw5k';

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        returnSecureToken: true,
      }),
      headers: { 'Content-type': 'application/json' },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let messageError = 'Autentification failed';
            if (data && data.error && data.error.message) {
              messageError = data.error.message;
            }
            alert(messageError);
            throw new Error(messageError);
          });
        }
      })
      .then((data) => {
        console.log(data);
        localStorage.setItem(
          'user',
          `{"userEmail":"${
            data.email
          }", "loginTime":"${Date.now()}", "idToken":"${
            data.idToken
          }","refreshToken":"${data.refreshToken}"}`
        );
      })
      .catch((err) => {
        alert(err.message);
      });
  };

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
