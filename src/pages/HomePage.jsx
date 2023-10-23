import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../store/users/usersActions';

const HomePage = () => {
    const {users}  = useSelector(state => state.users)
    const { loading } = useSelector(state => state.users)
    const [user, setUser] = useState([])
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if(users){
            setUser(users)
        }
    },[users])

    console.log(user, 'users')
    console.log(loading)

    return (
        <div>
            <button onClick={() => dispatch(getUsers())}>
                getusers
            </button>
            {loading ? (
                <h3>loading</h3>
            ) : (
                user.map((item) => (
                    <p>{item.username}</p>               
                ))
            )}
        </div>
    );
};

export default HomePage;