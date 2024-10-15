import { Helmet, HelmetProvider } from 'react-helmet-async';
import { DecorationTab } from '../../components/DecorationTab/DecorationTab';
import { useState } from 'react';
import css from './HomePage.module.css';
import { WelcomeTab } from '../../components/WelcomeTab/WelcomeTab';
import main from '../../images/main.module.css';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from '../../hooks/useAuth';
import { PieChartNeedle } from '../../components/PieChartNeedle/PieChartNeedle';
// import { Radio, RadioGroup, Stack, HStack, VStack, IconButton  } from '@chakra-ui/react';
import { FaSearch, FaCheckCircle  } from "react-icons/fa";
// import { RadioButton } from 'primereact/radiobutton';
// import { ChakraProvider } from '@chakra-ui/react';
// import { Radio, RadioGroup } from '@mui/material';
// import { Radio } from "@material-tailwind/react";
// import { Radio } from '@nextui-org/react';
import { Radio, RadioGroup } from 'react-custom-radio';
const HomePage = () => {
    const { isLoggedIn } = useAuth();
    const [value, setValue] = useState('apple');

    const handleRadio = e => {
        setValue(e.target.value);
    }
    return(
        <HelmetProvider>
            <Helmet>
                <title>Expense Tracker</title>
            </Helmet>
            {/* <div className={css.container}>
                <img src={require("../../images/BgImageWrapper.png")} alt="BgImageWrapper.png" id={css.imageWrapper}/>
                <DecorationTab />
                <WelcomeTab />
            </div> */}
{/* <div className={main.right}></div> */}

            {isLoggedIn ? 
            (<div>
                <div className={main.whole}>
                    <div className={main.decorationTab} style={{top:"5%",display:"block",paddingTop:"2%"}}>
                        <p className={main.bannerS}>Expense Log</p>
                        <p className={main.caption}>Capture and organize every penny spent with ease! A clear view of your financial habits at your fingertips.</p>
                    </div>
                    <div className={main.decorationTab} style={{top:"25%"}}>
                        {/* <div className={main.decorationTabLeft}>TAB LEFT</div>
                        <div className={main.decorationTabRight}>TAB RIGHT</div> */}
                    </div>

                    <div className={main.left}>
                        <div className={main.decor} style={{position:"absolute",top:"25%", left:"0%"}}>
                            <div className={main.decorationTabSolo}>
                                <div className={main.decorAlign}>
                                <img src={require("../../images/ArrowUp.png")}/>
                                <div className={main.balanceLabel}><div className={main.balanceLabel}>Total Income</div>
                                <div className={main.balanceAmount} style={{color:"var(--white)"}}>$632.000</div></div>
                                </div>
                            </div>
                        </div>
                        <div className={main.decor} style={{position:"absolute",top:"25%", left:"52%"}}>
                            <div className={main.decorationTabSolo}>
                                <div className={main.decorAlign}>
                                <img src={require("../../images/ArrowDown.png")}/>
                                <div className={main.balanceLabel}><div className={main.balanceLabel}>Total Expense</div>
                                <div className={main.balanceAmount} style={{color:"var(--white)"}}>$632.000</div></div>
                                </div>
                            </div>
                        </div>
                        <div className={main.qLL} style={{position:"absolute",top:"46%", height:"52%", width:"100%", right:"0%"}}>
                            {/* <PieChartNeedle /> */}
                        </div>
                    </div>
                    <div className={main.right} style={{backgroundColor:"var(--grayDark)"}}>


            <form>
                <div style={{position:"absolute",display:"inline-block",margin:"0",bottom:"50%",left:"0%",width:"100%",height:"47%"}}>
                    <div className={css.radioType}>
                        <input type="radio" name="type" value="expense" defaultChecked={true} onChange={handleRadio} style={{left:"0%",top:"5%"}}/>
                        <div className={css.label} style={{left:"11%",top:"6%"}}>Expense</div>
                    </div>
                    <div className={css.radioType}>
                        <input type="radio" name="type" value="income" style={{left:"20%",top:"5%"}}/>
                        <div className={css.label} style={{left:"31%",top:"6%"}}>Income</div>
                    </div>
                    <div className={css.form} style={{left:"6%",top:"20%"}}>
                        <div className={css.label}>Date</div>
                        <div className={css.label} style={{left:"46.5%"}}>Time</div>
                    </div>
                    <div className={css.form} style={{left:"6%",top:"30%",gap:"5%", width:"88%"}}>
                        <input type="date" name="date"/>
                        <input type="time" name="time"/>
                        {/* <input type="date" name="searchDate" className={main.search} style={{backgroundColor:"var(--grayDark)"}}/> */}
                    </div>
                    <div className={css.form} style={{left:"6%",top:"40%"}}>
                        <div className={css.label}>Category</div>
                    </div>
                    <div className={css.form} style={{left:"6%",top:"50%",gap:"5%", width:"88%"}}>
                        <input type="text" name="category" placeholder="Different"/>
                    </div>
                    <div className={css.form} style={{left:"6%",top:"60%"}}>
                        <div className={css.label}>Sum</div>
                    </div>
                    <div className={css.form} style={{left:"6%",top:"70%",gap:"5%", width:"88%"}}>
                        <input type="number" name="sum" placeholder="Enter the sum                                                                 UAH"/>
                    </div>
                    <div className={css.form} style={{left:"6%",top:"80%"}}>
                        <div className={css.label}>Comment</div>
                    </div>
                    <div className={css.form} style={{left:"6%",top:"90%",gap:"5%", width:"88%"}}>
                        {/* <input type="text" name="comment" placeholder="Enter the text" style={{height:"5em"}}/> */}
                        <textarea name="comment" placeholder="Enter the text" style={{height:"5em",paddingLeft:"15px",paddingRight:"15px"}}/>
                    </div>
                    <div className={css.form} style={{left:"6%",top:"100%",gap:"5%", width:"88%"}}>
                        <button type="submit" className={css.button}>Add</button>
                    </div>
                    
                </div>
            </form>

                        {/* <label>
                            Category
                            <input type="text" name="category" />
                            <input type="text" name="sum" />
                            <input type="text" name="comment" />
                            <input type="email" name="comment" />
                        </label> */}
                    </div>
                    {/* <div className={main.q75}></div> */}
                    {/* <div className={main.halfLQ}>LQ</div> */}
                </div>
            </div>) : 
            
            (<div>
                <div className={main.right} style={{display:"block"}}>
                    <div className={main.qUR} style={{width:"95%",top:"3%",backgroundColor:"var(--grayDarker)"}}>
                        <p className={main.caption} style={{paddingTop:"20%"}}>EXPENSE LOG</p>
                        <p className={main.banner}>Manage Your <span className={main.underline}>Finances</span> Masterfully!</p>
                        <p className={main.caption}>ExpenseTracker effortlessly empowers you to take control of your finances! With intuitive features, it simplifies the process of tracking and managing expenses, allowing for a stress-free mastery over your financial world.</p>
                    </div>
                    <div className={main.qLR} style={{width:"95%",top:"3%",backgroundColor:"var(--grayDarker"}}>
                        <AuthNav />
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
                </div>
            </div>)}
        </HelmetProvider>
    )
}

export default HomePage;