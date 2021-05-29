import React from 'react';
import './ProductCard.css';
import shoes from '../images/shoes.jfif';


function ProductCard() {
    return (
        <div className='productCard'>
            <div className="card">
                <img className='cardImage' src={shoes} alt="" />
                <h5 className='price'>RS : 2500</h5>
                <h5 className='productTitle'>Orignal Nike Shoes PK Brand</h5>


                <div className="city">
                <h5>Bahria Town Islamabad</h5>
                <div className="time">
                    <h5 >Today</h5>
                </div>
            </div>
            </div>

      
            
        </div>
    )
}

export default ProductCard;
