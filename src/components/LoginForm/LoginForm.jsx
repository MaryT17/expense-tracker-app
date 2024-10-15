import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logIn } from '../../redux/auth/authOperations';
import css from './LoginForm.module.css';
import main from '../../images/main.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={main.right} style={{display:"block",paddingTop:"12%", height:"71.20%"}}>
      <p className={main.banner}>Sign In</p>
      <p className={main.caption}>Welcome back to effortless expense tracking! Your financial dashboard awaits.</p>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off" style={{paddingTop:"5%"}}>
        <label className={css.label}>
          Email
          <input type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit" className={css.button}>Log In</button>
        <p className={main.caption}>Don't have an account? <Link to="/register" className={css.nav}>Sign Up</Link></p>
      </form>
    </div>
  );
};
