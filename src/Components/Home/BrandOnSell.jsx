import React from 'react';
import BrandOnSellCard from './BrandOnSellCard';
import { NavLink } from 'react-router-dom';

const BrandOnSell = ({coupons: brands}) => {
    console.log(brands)
    return (
        <div className='md:py-16 md:pt-0 pt-16 md:pb-0 pb-8'>
            <h1 className='md:text-6xl text-4xl text-white font-bold text-center md:mb-28 mb-14 animate__animated animate__fadeInDown animate__delay-2s'>Brands on Sale</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12 lg:ml-12'>
            {
                brands.slice(0, 6).map(brand=> <BrandOnSellCard key={brand._id} brand={brand}></BrandOnSellCard>)
            }
            </div>
            <div className='flex justify-center items-center py-16'>
            <NavLink to='/brand' className="btn border-2 border-[#78B3CE] text-[#78B3CE]  font-bold rounded-xl w-28">see more</NavLink>
            </div>
        </div>
    );
};

export default BrandOnSell;

