import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import { useAuth } from '../../hooks/useAuth';
import { SlArrowDown } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import css from './UserMenu.module.css';
import main from '../../images/main.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const [showUserPanel,setShowUserPanel] = useState(false);
  const [modalSettings,setModalSettings] = useState(false);
  const [modalLogout,setModalLogout] = useState(false);
  const [showCurrencyPanel,setShowCurrencyPanel] = useState(false);
  const [profileCurrency,setProfileCurrency] = useState('₴ UAH');
  const [userName,setUserName] = useState('');
  const dynamicActiveSettings = modalSettings ? css.toGreen : css.toGray;
  const dynamicActiveLogout = modalLogout ? css.toGreen : css.toGray;
  
  // const handleUserPanel = () => {
  //   setShowUserPanel(true);
  // }
  // const handleModalSettings = () => {
  //   setModalSettings(true);
  // }
  // const handleModalLogout = () => {
  //   setModalLogout(true);
  // }
  return (
    <div>
      <div className={css.wrapper}>
        {/* <p className={css.username}>Welcome, {user.name}</p>
        <button type="button" onClick={() => dispatch(logOut())}>
          Logout
        </button> */}




        <div style={{position:"absolute",display:"inline-block",bottom:"10px",color:"var(--gray)",justifyContent:"space-between",top:"10px",right:"4.5%"}}>
              <button className={css.userBarBtn} onClick={()=>setShowUserPanel(!showUserPanel)}>
                  <div className={css.userBarItems} style={{bottom:"8px",right:"10px"}}>
                    <img src={require("../../images/user0.png")} 
                      style={{width:"38px",borderRadius:"30px",backgroundColor:"var(--white)"}}/>
                  </div>
                  <div className={css.userBarItems} style={{color:"var(--gray)",width:"115px",bottom:"24px",left:"3px",textAlign:"left"}}>
                  {user.name}</div>{/* Alex Rybachok */}
                  <div className={css.userBarItems} style={{color:"var(--green)",bottom:"22px",left:"10px"}}>
                    {showUserPanel ? (<FaChevronUp />) : (<FaChevronDown />)}
                  </div>
              </button>
              {showUserPanel && 
              <div style={{position:"absolute",display:"inline-block",top:"56px",right:"0%",backgroundColor:"var(--grayDarker)",borderRadius:"15px",height:"80px",paddingTop:"3px",paddingBottom:"10px",zIndex:"1",border:"1px solid var(--gray)"}}>
                <li><button className={css.userPanel} onClick={()=>setModalSettings(!modalSettings)}>
                    <img src={require("../../images/user.png")} className={dynamicActiveSettings} style={{top:"3px",marginRight:"10px"}}/>
                    Profile Settings</button></li>
                <li><button className={css.userPanel} onClick={()=>setModalLogout(!modalLogout)}>
                    <img src={require("../../images/logout.png")} className={dynamicActiveLogout} style={{top:"3px",marginRight:"10px"}}/>
                    Log out</button></li>
              </div>
              }
        </div>
      </div>
      
      {modalSettings && (
        <div className={main.modalWhole}>
          <div className={css.modalSettings}>
            <div style={{position:"relative",left:"87%"}}><button className={css.userPanel} onClick={()=>{setModalSettings(!modalSettings);setShowUserPanel(!showUserPanel)}}>
                <img src={require("../../images/close.png")} className={css.toGray} style={{top:"3px"}}/>
              </button></div>
            <div style={{position:"relative",color:"var(--white)",fontSize:"30px",left:"40px",top:"0px"}}>Profile settings</div>
            <div style={{position:"relative",height:"100px",width:"100px",left:"40%",top:"10%",backgroundColor:"var(--grayDarker)",borderRadius:"90%"}}>
              <img src={require("../../images/userDefault.png")} style={{position:"relative",top:"35%",left:"35%",width:"30%"}}/></div>
            <div style={{position:"relative",top:"13%",left:"27%"}}>
              <button className={css.userPanelAvatar}>Upload new photo</button>
              <button className={css.userPanelAvatar} style={{width:"80px"}}>Remove</button>
            </div>
            <div style={{position:"relative",display:"inline-block",width:"100%",top:"20%",left:"10%"}}>
              {/* <input style={{position:"relative",width:"20%",marginRight:"3%"}}/> */}
              <button onClick={()=>{setShowCurrencyPanel(!showCurrencyPanel)}} style={{position:"relative",top:"10%",height:"56px",width:"115px",marginRight:"3%",font:"20px Suisse Intl, sans-serif",color:"var(--white)",textAlign:"left",borderRadius:"12px",backgroundColor:"var(--grayDark)",outline:"1px solid var(--gray)"}}>
              {profileCurrency}<FaChevronDown style={{position:"relative",top:"3px",left:"10px"}}/></button>
              
              
              
              
              
              {showCurrencyPanel && (
                <div style={{position:"absolute",display:"inline-block",width:"115px",top:"56px",right:"79%",backgroundColor:"var(--grayDarker)",borderRadius:"15px",height:"115px",paddingTop:"3px",paddingBottom:"10px",zIndex:"1",border:"1px solid var(--gray)"}}>
                  <li><button className={css.userPanel} onClick={()=>{setProfileCurrency('₴ UAH');setShowCurrencyPanel(!showCurrencyPanel)}} style={{font:"20px Suisse Intl, sans-serif"}}>₴ UAH</button></li>
                  <li><button className={css.userPanel} onClick={()=>{setProfileCurrency('$ USD');setShowCurrencyPanel(!showCurrencyPanel)}} style={{font:"20px Suisse Intl, sans-serif"}}>$ USD</button></li>
                  <li><button className={css.userPanel} onClick={()=>{setProfileCurrency('€ EUR');setShowCurrencyPanel(!showCurrencyPanel)}} style={{font:"20px Suisse Intl, sans-serif"}}>€ EUR</button></li>
                </div>
              )}
              <input defaultValue={user.name} onChange={e=>setUserName(e.target.value)} style={{position:"relative",width:"50%",right:"0%"}}/>
            </div>
            <div style={{position:"relative",top:"25%",left:"10%"}}>
              <button style={{width:"80%"}}>Save</button>
            </div>
          </div>
        </div>
      )}
      {modalLogout && (
        <div className={main.modalWhole}>
          <div className={css.modalLogout}>
            <div style={{position:"relative",color:"var(--white)",fontSize:"20px",left:"23%",top:"30%"}}>Are you sure you want to log out?</div>
            <div style={{position:"relative",top:"45%",left:"15%"}}>
              <button onClick={() => dispatch(logOut())} style={{width:"30%",margin:"15px"}}>Log out</button>
              <button onClick={()=>{setModalLogout(!modalLogout);setShowUserPanel(!showUserPanel)}} style={{width:"30%",margin:"15px"}}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
