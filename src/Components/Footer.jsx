import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='Footer'>
        <div>
            <h1 className='heading'>WTF</h1>
            <div>
                <img className='img-share' src={require('../assets/instagram.png')} alt="" />
                <img className='img-share' src={require('../assets/facebook.png')} alt="" />
                <img className='img-share' src={require('../assets/linkedin.png')} alt="" />
            </div>
        </div>
        <div>
            <h3 className='heading'>Quick Links</h3>
            <ul>
                <li>About</li>
                <li>FAQs</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Refund & Cancellation</li>
            </ul>
        </div>
        <div>
            <h3 className='heading'>Explore</h3>
            <ul>
                <li>Arenas</li>
                <li>Studios</li>
                <li>Nutririon</li>
            </ul>
        </div>
        <div>
            <h3 className='heading'>Contact</h3>
            <ul>
                <li>Contact at Address</li>
                <li>Contact via Phone</li>
                <li>Contact via Mail</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer