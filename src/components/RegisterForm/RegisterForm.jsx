import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { register } from '../../redux/auth/authOperations';
import css from './RegisterForm.module.css';
import main from '../../images/main.module.css';
/* Controlled Form Component vs Uncontrolled Form Component
 *
 * Controlled - data is controlled by state
 * Uncontrolled - data is controlled by the DOM
 */

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={main.right} style={{display:"block",paddingTop:"12%", height:"71.20%"}}>
                {/* <div className={main.qUR} style={{width:"95%",top:"3%",paddingTop:"20%"}}> */}
                    <p className={main.banner}>Sign Up</p>
                    <p className={main.caption}>Step into a world of hassle-free expense management! Your journey towards financial mastery begins here.</p>
                {/* </div> */}
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off" style={{paddingTop:"5%"}}>
        <label className={css.label}>
          Username
          <input type="text" name="name"/>
        </label>
        <label className={css.label}>
          Email
          <input type="email" name="email" />
        </label>
        <label className={css.label}>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit" className={css.button}>Register</button>
        <p className={main.caption}>Already have an account? <Link to="/login" className={css.nav}>Sign In</Link></p>
      </form>
    </div>
  );
};
