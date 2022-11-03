import React from 'react'
import "./Footer.css"
import  twiticon from '../assets/Twittericon.png'
import  kitee from '../assets/Kiteicon.png'
import  messg from '../assets/mesggicon.png'
import  footerbg from '../assets/Footerbg.png'


const Footer = () => {
  return (
     <>
    <div className='mainwrap' style={{ backgroundImage: `url(${footerbg})`}} >
     <div className='container'  >
     <div className="leftwrap">
          <h4>WARP Network</h4>
     </div>
     <div className="rightwrap">
          <div className='twiee'><a target="_blank" href="/"><img src={ twiticon } alt = ' ' /></a></div>
          <div className='kiteee'><a target="_blank" href="/"><img src={ kitee } alt = ' ' /></a></div>
          <div className='messgg'><a target="_blank" href="/"><img src={ messg } alt = ' ' /></a></div>
     </div>
     </div>
    </div>
    </>
  )
}

export default Footer