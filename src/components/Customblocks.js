import React from 'react'
import './Customblock.css'
import blockvectorimg from '../assets/blockvector.png';

const Customblocks = () => {
     return (
          <div className='customblockswrap'>
               <div className='container '>
                    <div className='content-box'>
                         <img className='connectwalltbtn' alt='' />
                         <div><h5></h5></div>

                         <div><h5>10 %</h5><p>Earn a fixed 10% weekly ROI</p></div>
                         <div><h5></h5></div>

                         <div><h5>730 %</h5><p>APR</p></div>
                         <div><h5></h5></div>

                         <div><h5>365 %</h5><p>Maximum ROI</p></div>
                         <div><h5></h5></div>

                         <div><h5>1</h5><p>Minimum Deposit</p></div>
                         <div><h5></h5></div>

                         <div><h5>730 %</h5><p>Max ROI of deposits with Compounds</p></div>
                         <div><h5></h5></div>

                         <div><h5>5x</h5><p>You can compound upto</p></div>
                         <div><h5></h5></div>
                    </div>
                    {/* Second row */}
                    <div className='content-box' id='content-boxx'>
                         <img className='connectwalltbtn' alt='' />
                         <div><h5></h5></div>

                         <div className='wrapone'><h5></h5><p></p></div>
                         <div><h5></h5></div>

                         <div ><img src={blockvectorimg} /><p>Maximum Deposit</p></div>
                         <div><h5></h5></div>

                         <div><h5>10 %</h5><p>Every deposit and collect has
                              base fee/  5% TVL, 5% Dev</p></div>
                         <div><h5></h5></div>

                         <div><h5>5th Day</h5><p>Compound or collect
                              every</p></div>
                         <div><h5></h5></div>

                         <div><h5>3%</h5><p>Refferal Commission</p></div>
                         <div><h5></h5></div>

                         <div className='wrapone'><h5></h5><p></p></div>
                         <div><h5></h5></div>
                    </div>
               </div>

          </div>
     )
}

export default Customblocks