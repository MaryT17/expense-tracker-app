import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState } from 'react';
import { FaSearch, FaCheckCircle  } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import css from './Others.module.css';
import main from '../../images/main.module.css';

const Others = () => {
    const [value, setValue] = useState('apple');

    const handleRadio = e => {
        setValue(e.target.value);
    }
    return(
        <HelmetProvider>
            <Helmet>
                <title>Expense Tracker</title>
            </Helmet>
            <div>
                <div className={main.whole}>
                    <div className={main.decorationTab} style={{top:"5%",display:"block",paddingTop:"2%"}}>
                        <p className={main.bannerS}>Expense Log</p>
                        <p className={main.caption}>Capture and organize every penny spent with ease! A clear view of your financial habits at your fingertips.</p>
                    </div>
                    <div className={main.left}>
                        
                    </div>
                    <div className={main.right}>
                        <div className={main.decor} style={{position:"absolute",top:"5%", left:"0%"}}>
                                <div className={main.decorationTabSolo}>
                                    <div className={main.decorAlign}>
                                    <img src={require("../../images/ArrowUp.png")}/>
                                    <div className={main.balanceLabel}><div className={main.balanceLabel}>Total Income</div>
                                    <div className={main.balanceAmount} style={{color:"var(--white)"}}>$632.000</div></div>
                                    </div>
                                </div>
                            </div>
                            <div className={main.decor} style={{position:"absolute",top:"5%", left:"52%"}}>
                                <div className={main.decorationTabSolo}>
                                    <div className={main.decorAlign}>
                                    <img src={require("../../images/ArrowDown.png")}/>
                                    <div className={main.balanceLabel}><div className={main.balanceLabel}>Total Expense</div>
                                    <div className={main.balanceAmount} style={{color:"var(--white)"}}>$632.000</div></div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className={main.q75}>
                    {/* <div style={{position:"absolute",display:"inline-block",top:"5%", left:"0%"}}> */}
                    <div style={{paddingLeft:"50px",paddingTop:"35px",paddingBottom:"15px"}}>
                        <div className={main.inputWrapper} style={{width:"23%"}}>
                            <input type="text" name="searchComment" placeholder="Search for anything" className={main.searchIcon}/>
                            <IoSearch className={main.icon}/>
                        </div>
                        <div className={main.inputWrapper} style={{width:"15%",paddingLeft:"30px"}}>
                            <input type="date" name="searchDate" className={main.search} style={{backgroundColor:"var(--grayDark)"}}/>
                        </div>
                    </div>
                    <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Comment</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>Sum</th>
                                <th>Actions</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td>Cinema</td><td>Jhon Week4</td><td>03.03.2023</td><td>14:30</td><td>150/UAH</td><td><button>Edit</button></td><td><button>Delete</button></td></tr>
                            <tr><td>Cinema</td><td>Jhon Week4</td><td>03.03.2023</td><td>14:30</td><td>150/UAH</td><td><button>Edit</button></td><td><button>Delete</button></td></tr>
                            <tr><td>Cinema</td><td>Jhon Week4</td><td>03.03.2023</td><td>14:30</td><td>150/UAH</td><td><button>Edit</button></td><td><button>Delete</button></td></tr>
                            <tr><td>Cinema</td><td>Jhon Week4</td><td>03.03.2023</td><td>14:30</td><td>150/UAH</td><td><button>Edit</button></td><td><button>Delete</button></td></tr>
                            <tr><td>Cinema</td><td>Jhon Week4</td><td>03.03.2023</td><td>14:30</td><td>150/UAH</td><td><button>Edit</button></td><td><button>Delete</button></td></tr>
                            <tr><td>Cinema</td><td>Jhon Week4</td><td>03.03.2023</td><td>14:30</td><td>150/UAH</td><td><button>Edit</button></td><td><button>Delete</button></td></tr>
                            <tr><td>Cinema</td><td>Jhon Week4</td><td>03.03.2023</td><td>14:30</td><td>150/UAH</td><td><button>Edit</button></td><td><button>Delete</button></td></tr>
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    )
}

export default Others;