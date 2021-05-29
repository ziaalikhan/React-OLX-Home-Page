import React from 'react';
import './Banner.css';
import olxBanner from '../images/olxBanner.PNG';
import ProductHeading from './ProductHeading';

function Banner() {
    return (
        <div>
            <img  className='banner' src={olxBanner} alt="" />
            <ProductHeading />

       
        </div>
    )
}

export default Banner
