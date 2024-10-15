import { Navigation } from '../Navigation/Navigation';
import { Link } from 'react-router-dom';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import css from './Header.module.css';
import main from '../../images/main.module.css';
import { Logo } from '../Logo/Logo';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <header className={css.header}>
        <Logo />
        <Navigation />
        <UserMenu />
        {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      </header>
    </div>
  );
};
