import React from 'react';
import BrandOnSellCard from './BrandOnSellCard';
import { NavLink } from 'react-router-dom';

const BrandOnSell = ({coupons: brands}) => {
    console.log(brands)
    return (
        <div className='py-16'>
            <h1 className='text-6xl text-white font-bold text-center mb-28'>Brands on Sale</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 lg:ml-12'>
            {
                brands.slice(0, 6).map(brand=> <BrandOnSellCard key={brand._id} brand={brand}></BrandOnSellCard>)
            }
            </div>
            <div className='flex justify-center items-center py-16'>
            <NavLink to='/brand' className="btn border-2 border-yellow-500 text-yellow-500  font-bold rounded-xl w-28">see more</NavLink>
            </div>
        </div>
    );
};

export default BrandOnSell;

