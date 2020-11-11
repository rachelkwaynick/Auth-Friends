import React, { useState } from 'react';
import axios from 'axios';

const initialCredentials = {
    username: '',
    password: ''
}

export default function Login(props) {
    const { history, setLoggedIn } = props;

    const [ credentials, setCredentials ] = useState(initialCredentials)
    
    const handleChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const login = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/login', credentials)
            .then(req => {
                localStorage.setItem('token', req.data.payload);
                history.push('/friendslist')
                setLoggedIn(true)
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={login}>
                <input
                    type='text'
                    name='username'
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input
                    type='password'
                    name='password'
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button>Log In</button>
            </form>
        </div>
    )
}