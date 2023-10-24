import React from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from '../pages/HomePage';
import Login from '../components/autorization/Login';
import Register from '../components/autorization/Register';

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
};

export default MainRoutes;