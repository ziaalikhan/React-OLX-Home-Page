import React from "react";
import './Subfooter.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import Footer from './Footer';

function Subfooter() {
  return (
    <div>
      <div className='subfooter'>

     
      <div>
          <h6>POPULAR CATEGORIES</h6>
          <p>Cars</p>
          <p>Jobs</p>
          <p>Flats for rent</p>
          <p>Mobile Phones</p>
      </div>
      <div>
      <h6>TRENDING SEARCHES</h6>
          <p>Bikes</p>
          <p>Watches</p>
          <p>Books</p>
          <p>Dogs</p>
      </div>
      <div>
      <h6>ABOUT US</h6>
          <p>About OLX Group</p>
          <p>OLX Blog</p>
          <p>Contact Us</p>
          <p>OLX for Businesses</p>
      </div>
      <div>
      <h6>OLX</h6>
          <p>Help</p>
          <p>Sitemap</p>
          <p>Legal & Privacy information</p>
      </div>
      <div>
      <h6>FOLLOW US</h6>
      <div  className='socialIcon'>
          <FacebookIcon className='fbIcon' />
            <TwitterIcon  className='fbIcon'/>
            <YouTubeIcon />
            <InstagramIcon />
      </div>
      </div>
      </div>

      <Footer />
   
    </div>
  );
}

export default Subfooter;
