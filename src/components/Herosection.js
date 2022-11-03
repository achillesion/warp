import React from 'react'
import './Hero.css'
import Plant from '../assets/bc-plant.svg'
import buttonpluslogo from '../assets/Vector.png'
import buttonget from '../assets/getbtn.png'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='container'>

                {/* Left Side */}
                <div className='item'>
                    
                    <h1>WARP is the most advanced Mining</h1>
                    <p>A decentralized web app with DAO protocol </p>
                    <div className='input-container'>
                        <button className=' btn btn-connect-wallet'style={{backgroundColor:'#14054F', border: "1px solid #8500C5"}} ><img className='connectwalltbtn' src={buttonpluslogo} alt='' /> Connect Wallet</button>
                        <button className='btn' style={{backgroundColor:'#8500C5'}}><img className='connectwalltbtn' src={buttonget} alt='' /> Get Started</button>
                    </div>
                </div>


                {/* Right Side */}
                <div className='item'>
                    <div className='img-container'>
                        <img src={Plant } alt=''/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
