import css from './DecorationTab.module.css';

export const DecorationTab = () => {
    return(
        <div className={css.bg}>
            <img src={require("../../images/ArrowUp.png")} className={css.balanceState}/>
            <div className={css.balanceLabel}>
                <div className={css.balanceLabel}>Your balance</div>
                <div className={css.balanceAmount}>$632.000</div>
            </div>
            <div className={css.raise}>+1.29%</div>
        </div>
    )
}