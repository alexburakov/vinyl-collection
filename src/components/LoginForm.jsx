import styles from './LoginForm.module.css';
import { Button } from './UI/Button';
import { Input } from './UI/Input';

export const LoginForm = () => {
  return (
    <div className={styles.container__form}>
      <h2 className={styles.form__header}>{'Create new account'}</h2>
      <p className={styles.form__subheader}>
        {'Already a member? '}
        <a className={styles.subheader__link} href="#">
          {'Log in'}
        </a>
      </p>
      <form className={styles.form__login}>
        <Input placeholder={'E-mail'} type={'email'} />
        <Input placeholder={'Password'} />
        <Input placeholder={'Repeat password'} />
        <rb className={styles.mg_1} />
        <Button>Create account</Button>
        <span className={styles.form__subheader}>or</span>
        <Button>Sign up with Google</Button>
      </form>
    </div>
  );
};
