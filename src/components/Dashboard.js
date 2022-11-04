import React from 'react'
import noticee from '../assets/Important notice.png'
import wallet from '../assets/wallet.png'
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
              <div className='leftimepool'>
                <div className='hirwall'>
                  <div className='hiring'>
                    <p>Hiring Example</p>
                    <p>100 WRAP = 0 Farmers</p>
                    <p>Daily Yeild: 0 WRAP</p>
                  </div>
                  <div className='hiringright'>
                    <h3><img src={wallet} />   Wallet</h3>
                    <p>100 WRAP = 0 Farmers</p>
                    <p>Daily Yeild: 0 WRAP</p>
                  </div>
                </div>
              </div>
              <div className='rightimepool'>sell</div>
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