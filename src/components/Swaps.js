import React from 'react'
import noticee from '../assets/Important notice.png'
import wallet from '../assets/wallet.png'
import yellowcoin from '../assets/yellowcoin.png'
import swapss from '../assets/swaps.png'
import BNB from '../assets/BNB.png'
import Downarrow from '../assets/downarrow.png'
import swppingarrows from '../assets/arrowss.png'
import copyimage from '../assets/copyimge.png'
import metamaskcat from '../assets/metamaskcat.png'
import "./swaps.css"

function Swaps() {
    return (
        <>
            <div className='swp'>
                <div className='container'>
                    {/* first div */}
                    <div className='flippingminiame'>
                        <h1>Warp Swaping</h1>
                        <p>Swap your coin BNB to WRAP</p>
                        <img src={yellowcoin} alt='yellowcoin' />
                    </div>
                    {/* second div */}
                    <div className='warpbusd'>
                        {/*Left columns */}
                        <div className='approvewrap'>
                            <h2 className='dsktopflippheadd'>SWAP BNB <img className='swaper' src={swapss} />WRAP</h2>
                            <h2 className='mobileflippheadd'>Its fast, quick and easy!</h2>
                            <div className='amountwrap'>
                                <img className='bnbimg' src={BNB} alt='BNB'/>
                                <p>BNB</p>
                                <img src={Downarrow} alt='BNB'/>
                            </div>
                            {/* form div */}
                            <div>
                                <form className='poolform'>
                                    <div className='bnbtopform'>
                                    <input type="text" id="fname" name="fname" />
                                    <div className='renderpercnt'><p>0.0</p></div>
                                    </div>
                                </form>
                            </div>
                            {/* swap arrows up and down */}
                            <div className='swparrowsud'><img src={swppingarrows} /></div>
                            {/* swap arrows up and down */}
                            <div className='amountwrap' id='amountwrap'>
                                <img className='bnbimg' src={BNB} alt='BNB'/>
                                <p>WARP</p>
                                <img src={Downarrow} alt='downarrows'/>
                                <img src={copyimage} alt='copyicon'/>
                                <img src={metamaskcat} alt='metamaskc'/>
                            </div>
                            {/* form div */}
                            <div>
                                <form className='poolform'>
                                    <div className='bnbtopform'>
                                    <input type="text" id="fname" name="fname" />
                                    <div className='renderpercnt'><p>0.0</p></div>
                                    </div>
                                </form>
                            </div>
                            <div className='slippage'>
                                <p>Slippage Tolerance</p>
                                <p>0.5%</p>
                            </div>
                            <button>SWAP</button>
                        </div>

                        {/*Left columns end */}


                        {/*Right column */}
                        <div className='approvewrap' id="rightcolumn">
                            <h2 className='dsktopflippheadd'>SWAP BNB <img className='swaper' src={swapss} />WRAP</h2>
                            <h2 className='mobileflippheadd'>Its fast, quick and easy!</h2>
                            <div className='amountwrap' id='amountwrap'>
                                <img className='bnbimg' src={BNB} alt='BNB'/>
                                <p>WARP</p>
                                <img src={Downarrow} alt='downarrows'/>
                                <img src={copyimage} alt='copyicon'/>
                                <img src={metamaskcat} alt='metamaskc'/>
                            </div>
                            {/* form div */}
                            <div>
                                <form className='poolform'>
                                    <div className='bnbtopform'>
                                    <input type="text" id="fname" name="fname" />
                                    <div className='renderpercnt'><p>0.0</p></div>
                                    </div>
                                </form>
                            </div>
                            {/* swap arrows up and down */}
                            <div className='swparrowsud'><img src={swppingarrows} /></div>
                            {/* swap arrows up and down */}
                                                        <div className='amountwrap'>
                                <img className='bnbimg' src={BNB} alt='BNB'/>
                                <p>BNB</p>
                                <img src={Downarrow} alt='BNB'/>
                            </div>
                            {/* form div */}
                            <div>
                                <form className='poolform'>
                                    <div className='bnbtopform'>
                                    <input type="text" id="fname" name="fname" />
                                    <div className='renderpercnt'><p>0.0</p></div>
                                    </div>
                                </form>
                            </div>
                            
                            <div className='slippage'>
                                <p>Slippage Tolerance</p>
                                <p>0.5%</p>
                            </div>
                            <button>SWAP</button>
                        </div>
                        {/*Right column end */}
                    </div>
                </div>
            </div>
        </>
    )
}
// export function
export default Swaps