import React from 'react';
import Header from '../Components/Header/Header';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div className='font-Roboto'>
           <header className='md:w-11/12 mx-auto md:py-8'>
            <Header></Header>
           </header>
           <main className='w-11/12 mx-auto'><Outlet></Outlet></main>
           <ToastContainer></ToastContainer>
        </div>
    );
};

export default MainLayout;