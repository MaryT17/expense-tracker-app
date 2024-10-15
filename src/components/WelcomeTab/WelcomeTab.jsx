import css from './WelcomeTab.module.css';

export const WelcomeTab = () => {
    return(
        <div className={css.welcomeTab}>
            <div className={css.expenseBlock}>
                <p className={css.caption}>EXPENSE LOG</p>
                <p className={css.banner}>Manage Your <span className={css.underline}>Finances</span> Masterfully!</p>
                <p className={css.caption}>ExpenseTracker effortlessly empowers you to take control of your finances! With intuitive features, it simplifies the process of tracking and managing expenses, allowing for a stress-free mastery over your financial world.</p>                
            </div>
            <div className={css.allUsersTab}>
                <p className={css.count}>1000 users +</p>
                <p className={css.countCaption}>Trusted by users for reliable expense tracking!</p>
            </div>
            <div className={css.pfp}>
                <img src={require("../../images/user3.png")} className={css.userPfp} id={css.p3}/>
                <img src={require("../../images/user2.png")} className={css.userPfp} id={css.p2}/>
                <img src={require("../../images/user1.png")} className={css.userPfp} id={css.p1}/>
            </div>
        </div>
    )
}