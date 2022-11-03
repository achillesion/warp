import React from 'react'
import './Notice.css'
import noticee from '../assets/Important notice.png'

const Notice = () => {
     return (
          <div className='noticed'>
               <div className='container '>
                    <div className='content-box'>
                         <img className='connectwalltbtn' src={noticee} alt='' />
                         <h3>Important Notice</h3>
                    </div>
                    <div>
                         <p>1-Any action will restart the timer. When making new Deposits any pending Rewards will auto compound</p>
                    </div>
               </div>

          </div>
     )
}

export default Notice
