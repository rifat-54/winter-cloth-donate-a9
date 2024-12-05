import React, { useContext } from 'react';
import { authContex } from './AuthProvider';
import { useLocation, Navigate } from 'react-router-dom';

const PrivareRoutes = ({children}) => {
    const location=useLocation()
    // console.log('private',location)
    const{user,loading}=useContext(authContex)
    if(loading){
        return <div className='flex justify-center items-center mt-14'>
            <span className="loading  loading-bars loading-lg"></span>
        </div>
    }

    if(!user){
        return <Navigate state={location.state} to={'/login'}></Navigate>
    }

    return children;
};

export default PrivareRoutes;