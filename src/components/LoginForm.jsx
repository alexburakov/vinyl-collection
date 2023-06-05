import styles from './LoginForm.module.css';
import { Button } from './UI/Button';
import { Input } from './UI/Input';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Login } from '../store/authSlice';

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.auth.status);
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm();

  const [isLoginForm, setIsLoginForm] = useState(true);

  const isLoginToggle = () => {
    setIsLoginForm(!isLoginForm);
    isLoginForm ? navigate('/signUp') : navigate('/login');
  };

  const submitHandler = async (data) => {
    await trigger();
    data = {
      ...data,
      signUp: !isLoginForm,
    };
    console.log('⭐️ Enter login and pass: ', data);
    try {
      await dispatch(Login(data));
    } catch (err) {
      console.error('❌ Error:', err);
    }
  };

  useEffect(() => {
    console.log('✅', isLogin);
    if (isLogin === 'login') {
      navigate('/my-collection');
    }
  }, [isLogin, navigate]);

  console.log('⭐️ redux store: ', isLogin);

  console.log('RHF err: ', errors);

  return (
    <div className={styles.container__form}>
      <h2 className={styles.form__header}>
        {isLoginForm ? 'Welcome back' : 'Create new account'}
      </h2>
      <p className={styles.form__subheader}>
        {isLoginForm ? 'Not a member? ' : 'Already a member? '}
        <a className={styles.subheader__link} onClick={isLoginToggle}>
          {isLoginForm ? 'Sign up' : 'Log in'}
        </a>
      </p>
      <div className={styles.form__login}>
        <form noValidate onSubmit={handleSubmit(submitHandler)}>
          <Input
            placeholder={'E-Mail'}
            type={'email'}
            errors={errors}
            register={register('email', {
              required: 'Must be filled',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            })}
          />
          {errors?.email && (
            <p className={styles.input__error}>{errors?.email?.message}</p>
          )}
          <Input
            placeholder={'password'}
            type="password"
            register={register('password', {
              required: 'Must be filled',
              minLength: { value: 6, message: 'min 6' },
              maxLength: 20,
            })}
          />
          {errors?.password && (
            <p className={styles.input__error}>{errors?.password?.message}</p>
          )}
          <p className={styles.mg_1}></p>
          <Button>{isLoginForm ? 'Log in' : 'Create account'}</Button>
        </form>
        {/* <span className={styles.form__sep}>or</span>
        <Button>
          {isLoginForm ? 'Log in with Google' : 'Sign up with Google'}
        </Button> */}
      </div>
    </div>
  );
};
