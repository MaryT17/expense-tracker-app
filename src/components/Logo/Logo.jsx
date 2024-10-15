import { Link } from 'react-router-dom';
import css from './Logo.module.css';

export const Logo = () => {
    return (
        <Link to="/" className={css.nav}>
            <img src={require("../../images/expenseTracker192.png")} alt="" style={{width: "30px", height: "30px"}}/>EXPENSETRACKER
            {/* style={{width: "30px", height: "30px"}} */}
        </Link>
        // <div>
        //     <img src={require("../../images/expenseTracker192.png")} alt=""style={{width: "30px", height: "30px"}}/>
        //     <Link to="/" className={css.nav}>EXPENSETRACKER</Link>
        // </div>
    )
}