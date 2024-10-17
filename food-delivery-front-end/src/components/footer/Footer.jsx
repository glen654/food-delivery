import React from 'react'
import './footer.css'
import {assets} from '../../assets/img/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" className='footer-logo'/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta et veritatis aliquam facilis quia! Cumque aspernatur repudiandae exercitationem ab minus iste voluptates, delectus soluta accusamus earum ratione ducimus nemo eos?</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>contact@yumrush.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 YumRush.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer