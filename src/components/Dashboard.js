import React from 'react'
import noticee from '../assets/Important notice.png'
import wallet from '../assets/wallet.png'
import checkmarrk from '../assets/checkmark.png'
import "./dashboard.css"

function Dashboard() {
  return (
    <>
      <div className='parentdisclaimer'>
        <div className='container'>
          {/* leftside */}
          <div className='leftside'>
            <div className='topdisclaimerwrap'>
              <div className='content-box'>
                <img className='connectwalltbtn' src={noticee} alt='' />
                <h3>Disclaimer</h3>
              </div>
              <div>
                <p>Funds that are used to initially hire farmers (including re-hire) cannot be withdrawn, however your farmers will indefinitely work and grow crops for you. Please use the application at your own risk.</p>
              </div>
            </div>
            <div className='bottomdisclaimerwrap'>
              {/* left side */}
              <div className='leftimepool'>
                <div className='hirwall'>
                  <div className='hiring'>
                    <p>Hiring Example</p>
                    <p>100 WRAP = 0 Farmers</p>
                    <p>Daily Yeild: 0 WRAP</p>
                  </div>
                  <div className='hiringright'>
                    <h3><img src={wallet} alt='walletimage' />Wallet</h3>
                    <p>0 WARP</p>
                  </div>
                </div>
                <div className='timepooldiv'>
                  <h2>TIME POOL</h2>
                  <h3>58:04</h3>
                  <h3>3316.78 BUSD</h3>
                </div>
                <div className='depositwarp'>
                  <p>Deposit WARP</p>
                  <p>Available: 25.6 WARP</p>
                </div>
                <div>
                  <form className='poolform'>
                    <input type="text" id="fname" name="fname" />
                    <button>Deposit</button>
                  </form> </div>
              </div>
              {/* right side */}
              <div className='rightimepool'>

                <div className='hirwall'>
                  <div className='hiring'>
                    <p> 0 Farmers</p>
                    <p>Estimated daily yeild: </p>
                    <p>Compund Count:</p>
                  </div>
                  <div className='hiring' id="righthired">
                    <p>0 WARP</p>
                    <p>0.5 WARP</p>
                    <p>0.5 Time/s</p>
                  </div>
                </div>
                <div className='hiredbuttons'>
                  <button>Sell crops in  00:00:00 </button>
                  <button className='hiree'>Hire More Farmers ( + 0% )</button>
                </div>
                <div className='withdrawin'><p>Every time you compound without withdrawing, your compound bonus grows by 0% (max +0%). Withdrawing will reset your bonus to 0.</p></div>
                <div className='referrallink '>
                  <img src={checkmarrk} alt='' />
                  <p>Earn 0% on your referral link!  </p>
                </div>
              </div>
            </div>
          </div>
          {/* rightside */}
          <div className='rightside'>
            <div className='content-box'>
              <div className='darkbluebox'>
                <p>Initial Deposit</p>
                <h4>0 WARP</h4>
              </div>
              <div className='darkbluebox'>
                <p>Total Deposit</p>
                <h4>0 WARP</h4>
              </div>
              <div className='darkbluebox'>
                <p>Withdrawn</p>
                <h4>0 WARP</h4>
              </div>
              <div className='darkbluebox'>
                <p>Refferals (0)</p>
                <h4>0 WARP</h4>
              </div>
              <div className='darkbluebox'>
                <p>Total BUSD Locked</p>
                <h4>0 WARP</h4>
              </div>
              <div className='darkbluebox'>
                <p>Total Deposit Count</p>
                <h4>0 WARP</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard