import React from 'react'
// import './Fotter.css'
import './foot.css'
import footer_logo from '../Assets/logo.png'
import inst_logo from '../Assets/insta.png'
import fb_logo from '../Assets/fb.png'
import twitter from  '../Assets/twitter.png'
import whatsapp from '../Assets/whatsapp.png'
const Footer = () => {
  return (
    // <div className='Footer'>
    //     <div className="footerlogo">
    //         <img src={footer_logo} alt="" />
    //         A Mart
    //     </div>
    //     <ul className="footerlinks">
    //         <li>about us</li>
    //         <li>contact us</li>
    //         <li>carres</li>
    //         <li>partnerships</li>
    //         <li>investments</li>      
    //     </ul>
    //     <div className="socialmedia">
    //         <div className="icons">
    //             <img src={inst_logo} alt="" />
    //             <img src={fb_logo} alt="" />
    //             <img src={twitter} alt="" />
    //             <img src={whatsapp} alt="" />

    //         </div>
    //     </div>

    //    <div className="copyright">
    //     <p>Copyright @ 2025 All Right Reserved</p>
    //    </div>
        
        
    // </div>






    
  <footer>
    <div className="footer-container">
      <div className="footer-column">
        <h3>Resources</h3>
        <ul>
          <li>Find A Store</li>
          <li>Become A Member</li>
          <li>Best Products</li>
          <li>Product Advice</li>
          <li>Send Us Feedback</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Help</h3>
        <ul>
          <li>Get Help</li>
          <li>Order Status</li>
          <li>Delivery</li>
          <li>Returns</li>
          <li>Payment Options</li>
          <li>Contact Us On All Other Inquiries</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Company</h3>
        <ul>
          <li>About Us</li>
          <li>News</li>
          <li>Careers</li>
          <li>Investors</li>
          <li>Sustainability</li>
          <li>Impact</li>
          <li>Report a Concern</li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <h6>© 2025 A mart, Inc. All rights reserved</h6>
      <p>Guides</p> 
      <p>Terms of Sale</p> 
      <p>Terms of Use</p> 
      <p>Our Privacy Policy</p> 
      <p>Privacy Settings</p>
    </div>
  </footer>
  )
}

export default Footer