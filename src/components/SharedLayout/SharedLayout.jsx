import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { useAuth } from '../../hooks/useAuth';
import { Suspense } from 'react';
import { Logo } from '../Logo/Logo';
import css from './SharedLayout.module.css';
import main from '../../images/main.module.css';

export const SharedLayout = () => {
  const { isLoggedIn } = useAuth();
  return (
    <div className={css.container}>
      {isLoggedIn ? (<div><Header /></div>) : 
      (<div style={{marginBottom:"1.94%"}}>
          <div className={css.logo}>
              <Logo />
          </div>
          <div className={main.left}>
              <img src={require("../../images/BgImageWrapper.png")} alt="BgImageWrapper.png" className={css.imageWrapper}/>
              <div className={main.decor} style={{position:"absolute",top:"53%", left:"2%"}}>
                  <div className={main.decorationTabSolo} style={{backgroundColor:"var(--white)"}}>
                      <div className={main.decorAlign}>
                      <img src={require("../../images/ArrowUp.png")}/>
                      <div className={main.balanceLabel}><div className={main.balanceLabel}>Your balance</div>
                      <div className={main.balanceAmount} style={{color:"var(--grayDarker)"}}>$632.000</div></div>
                      <div className={main.raise}>+1.29%</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>)}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};