import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if(loading){
        return <span className="loading loading-spinner loading-md"></span>
    }

    if(user){
        return children;
    }

     return <Navigate to="/signin" state={{ from: location }} replace />;

};

export default PrivateRoute;