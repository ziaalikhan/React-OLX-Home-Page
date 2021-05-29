import React from 'react';
import './SubNavbar.css';
import Banner from './Banner'

function SubNavbar() {
    return (
        <div className='subNavbar'>
         <div className='categories'>
            <p>All Categories</p>
            <p>Mobile Phones</p>
            <p>Cars</p>
            <p>MoterCycles</p>
            <p>Houses</p>
            <p>Lands</p>
            <p>Plots</p>
            <p>Watches</p>
         </div>
            
            <Banner />
        </div>
    )
}

export default SubNavbar;

