import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import css from './Navigation.module.css';
import { Logo } from 'components/Logo/Logo';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav className={css.nav}>
      <NavLink to="/" 
        className={({ isActive }) => (isActive ? css.linkActive : css.link)}
        id={css.navExpense}
      >All Expense
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/others"
          className={({ isActive }) => (isActive ? css.linkActive : css.link)}
          id={css.navIncome}
        >All Income
        </NavLink>
      )}
    </nav>
  );
};
