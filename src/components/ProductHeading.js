import React from 'react';
import './ProductHeading.css'; 
import ProductCard from './ProductCard';
import LoadMoreBtn from './LoadMoreBtn'


function ProductHeading() {
    return (
        <div className='productHeading'>
            <h3>Featured Products</h3>
            <div className='totalCards'>
            <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <div className='totalCards'>
            <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <div className='totalCards'>
            <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <div className='totalCards'>
            <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <div className='totalCards'>
            <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>

            <LoadMoreBtn />
        </div>
    )
}

export default ProductHeading;
