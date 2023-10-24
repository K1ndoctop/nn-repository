import React, { useState } from 'react';
import { LoginUser } from '../../store/users/usersActions';
import { useDispatch } from 'react-redux';

const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        dispatch(LoginUser({email: email, password: password}))
        setEmail('')
        setPassword('')
    }

    return (
        <div>
            <h1>login</h1>
            <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} value={email}/>
            <input type="text" placeholder='password' onChange={(e) => setPassword(e.target.value)} value={password}/>
            <button onClick={login}>log-in</button>
        </div>
    );
};

export default Login;