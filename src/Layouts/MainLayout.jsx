import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='font-Roboto'>
           <header className='w-11/12 mx-auto py-8'>
            <Header></Header>
           </header>
           <main className='w-11/12 mx-auto'><Outlet></Outlet></main>
        </div>
    );
};

export default MainLayout;