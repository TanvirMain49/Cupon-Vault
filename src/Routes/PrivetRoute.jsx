import React, { useContext } from 'react';
import AuthProvider, { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoute = ({children}) => {
    const {user, loader} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loader){
        return <span className="loading loading-spinner text-info"></span>
    }

    if(user && user.email){
        return children;
    }
    return (
        <Navigate state={location.pathname} to="/login"></Navigate>
    );
};

export default PrivetRoute;