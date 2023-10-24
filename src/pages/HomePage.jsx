import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkToken, getUser } from '../store/users/usersActions';

const HomePage = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(checkToken())
    },[])

    return (
        <div>
        
        </div>
    );
};

export default HomePage;