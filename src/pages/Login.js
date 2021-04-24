import React, { useState } from 'react'
import { tokenObtain } from '../constants'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const getAccess = () => {
        const accessToken = localStorage.getItem("access");

        if (accessToken) {
            console.log({ accessToken })
        }
    }

    getAccess();

    const handleChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const userData = {
            'username': email,
            'password': password
        }

        fetch(tokenObtain, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
        })
            .then(response => response.json())
            .then(data => {

                if (data.access) {
                    localStorage.setItem('access', data.access);
                }

                if (data.refresh) {
                    localStorage.setItem('refresh', data.refresh);
                }
                console.log('Success:', data.refresh ? true : false);
            })
            .catch((error) => {
                console.error('Error:', error);
            })
            .finally(function () {
                setEmail('');
                setPassword("");

            });
    }

    return (
        <div>
            <h1 className="text-center text-4xl text-green-300 mt-9">Login</h1>

            <form className='mt-9 mx-auto w-4/6' onSubmit={handleSubmit}>

                <div className="flex my-3 w-3/4 mx-auto">

                    <input type="email" placeholder="email" className="w-3/4 rounded-md h-12 border border-green-500 focus:border-green-50 placeholder-green-600 px-3" value={email} onChange={handleChange} />
                </div>
                <div className='flex my-3 w-3/4 mx-auto'>

                    <input type="password" placeholder="password" className="w-3/4 h-12 rounded-md focus:border-green-50 placeholder-green-600 border border-green-500 px-4" value={password} onChange={handlePassword} />
                </div>
                <div className="flex w-3/4 mx-auto">
                    <input type="submit" value="Submit" className="py-2 px-3 bg-green-100 text-2xl cursor-pointer border-4 font-medium border-green-300 hover:bg-green-900 hover:text-green-300 hover:border-green-200 transition ease-linear text-green-900 w-1/3 rounded-md" />

                </div>
            </form>
        </div>
    )
}

export default Login;
