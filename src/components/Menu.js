import React from 'react'
import Logo from '../assets/logo-warp.png'
import dashboardlogo from '../assets/Deshboard logo.png'
import lotterylogo from '../assets/lottery logo.png'
import coinFliperlogo from '../assets/Coin Fliper logo.png'
import contactuslogo from '../assets/Contact us logo.png'
import swapslogo from '../assets/Swap logo.png'
import buttonpluslogo from '../assets/Vector.png'
import popupbacgrnd from '../assets/popupbackgrnd.png'
import crosswallet from '../assets/crosspopup.png'
import homlogo from '../assets/Home logo.png'
import humbergerr from '../assets/bars.png'
import mobilebenefits from '../assets/mobilebenefits.png'
import mobileswaps from '../assets/mobileswaps.png'
import mobilelottry from '../assets/mobilelottry.png'
import mobilehomee from '../assets/mobilehomee.png'
import mobilefaq from '../assets/mobilefaq.png'
import mobilecrypto from '../assets/mobilecrypto.png'
import mobilecoinflip from '../assets/mobilecoinflip.png'
import mobilebg from '../assets/mobilebg.png'



import { NavLink } from "react-router-dom";
import './Menu.css';
import { useState } from "react";
import "./popup.css";


const Menu = () => {

     const [click, setClick] = useState(false)
     const handleClick = () => {
          setClick(!click);
     }

     const [modal, setModal] = useState(false);
     const toggleModal = () => {
          setModal(!modal);
     };


     if (modal) {
          document.body.classList.add('active-modal')
     } else {
          document.body.classList.remove('active-modal')
     }
     if (click) {
          document.body.classList.add('active-modall')
     } else {
          document.body.classList.remove('active-modall')
     }


     return (
          <>
               <div className='header' id='desktophead'>
                    <div className='container'>
                         <img className='sitelogo' src={Logo} alt='' />
                         <ul className='nav-menu nav-menu'>
                              <li><NavLink exact activeClassName="active_class" to="/"><img src={homlogo} alt='' />Home</NavLink></li>
                              <li><NavLink activeClassName="active_class" to='/dashboard'><img src={dashboardlogo} alt='' />Dashboard</NavLink></li>
                              <li><NavLink activeClassName="active_class" to='/lottery'><img src={lotterylogo} alt='' />Lottery</NavLink></li>
                              <li><NavLink activeClassName="active_class" to='/coin-flipper'><img src={coinFliperlogo} alt='' />Coin Flipper</NavLink></li>
                              <li><NavLink activeClassName="active_class" to='/slots'><img src={homlogo} alt='' />Slots</NavLink></li>
                              <li><NavLink activeClassName="active_class" to='/swaps'><img src={swapslogo} alt='' />Swaps</NavLink></li>
                              <li><NavLink activeClassName="active_class" to='/contact-us'><img src={contactuslogo} alt='' />Contact Us</NavLink></li>
                         </ul>
                         <div className='btn-group'>
                              <button onClick={toggleModal} className=' btn-modal btn' id="myBtn"><img className='connectwalltbtn' src={buttonpluslogo} alt='' />Connect Wallet</button>
                         </div>

                         {modal && (
                              <div className="modal" >
                                   <div onClick={toggleModal} className="overlay"></div>
                                   <div className="modal-content" style={{ backgroundImage: `url(${popupbacgrnd})` }}>
                                        <div className='prntwrap'><div><p>wrap</p></div><div><h3>Connect Wallet</h3></div><div style={{ textAlign: 'end' }}> <img onClick={toggleModal} src={crosswallet} alt='' /></div>
                                        </div>
                                        <div className='selectwallet'>
                                             <p className='pee'>Select your wallet provider</p>
                                             <button><p>Metamask</p></button>
                                             <button><p>WalletConnect</p></button>
                                        </div>
                                        <button className="close-modal" onClick={toggleModal}>
                                             CANCEL
                                        </button>
                                   </div>
                              </div>
                         )}
                    </div>
               </div>

               <div className='header mobile-header' id='mobilehead'>
                    <div className='hamburger' onClick={handleClick}>
                         <img className='mobilesitelogo' src={humbergerr} alt='' />
                         <img className='sitelogo' src={Logo} alt='' />
                         <p className='mobilesitetext'>WRAP Pro</p>
                    </div>
                    {click && (
                         <ul className='nav-menu nav-menu'  style={{ backgroundImage: `url(${mobilebg})` }}>
                              <li><NavLink exact activeClassName="active_class" to="/"><img src={mobilehomee} alt='' />Home</NavLink></li>
                              <li><NavLink activeClassName="active_class" to='/benefits'><img src={mobilebenefits} alt='' />Benefits</NavLink></li>
                              <li><NavLink activeClassName="active_class" to='/dashboard'><img src={mobilehomee} alt='' />Dashboard</NavLink></li>
                              <li><NavLink activeClassName="active_class" to='/lottery'><img src={mobilelottry} alt='' />Lottery</NavLink></li>
                              <li><NavLink activeClassName="active_class" to='/coin-flipper'><img src={mobilecoinflip} alt='' />Coin Flipper</NavLink></li>
                              <li><NavLink activeClassName="active_class" to='/slots'><img src={mobilehomee} alt='' />Slots</NavLink></li>
                              <li><NavLink activeClassName="active_class" to='/swaps'><img src={mobileswaps} alt='' />Swaps</NavLink></li>
                              <li><NavLink activeClassName="active_class" to='/buy-crypto'><img src={mobilecrypto} alt='' />Buy Crypto</NavLink></li>
                              <li><NavLink activeClassName="active_class" to='/faq'><img src={mobilefaq} alt='' />FAQ</NavLink></li>
                              <li><NavLink activeClassName="active_class" to='/info'><img src={mobilefaq} alt='' />Info</NavLink></li>

                         </ul>
                    )}
                       <div className='btn-group'>
                              <button onClick={toggleModal} className=' btn-modal btn' id="myBtn"><img className='connectwalltbtn' src={buttonpluslogo} alt='' />Connect Wallet</button>
                         </div>

                         {modal && (
                              <div className="modal" >
                                   <div onClick={toggleModal} className="overlay"></div>
                                   <div className="modal-content" style={{ backgroundImage: `url(${popupbacgrnd})` }}>
                                        <div className='prntwrap'><div><p>wrap</p></div><div><h3>Connect Wallet</h3></div><div style={{ textAlign: 'end' }}> <img onClick={toggleModal} src={crosswallet} alt='' /></div>
                                        </div>
                                        <div className='selectwallet'>
                                             <p className='pee'>Select your wallet provider</p>
                                             <button><p>Metamask</p></button>
                                             <button><p>WalletConnect</p></button>
                                        </div>
                                        <button className="close-modal" onClick={toggleModal}>
                                             CANCEL
                                        </button>
                                   </div>
                              </div>
                         )}

               </div>
               

          </>
     )
}

export default Menu
