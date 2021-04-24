import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'
import Logout from '../pages/Logout'


const Nav = () => {
    return (
        <Router>

            <nav className="bg-green-50 shadow-md w-screen px-4 py-5 flex mx-auto md:flex-row md:justify-between">
                <div className='md:w-2/5'>
                    <Link to="/" className="text-3xl font-medium duration-100 ease-in text-green-800 cursor-pointer hover:font-bolder hover:text-green-400">Zol-OnDoor</Link>

                </div>
                <div className="flex md:flex-row md:justify-around md:w-3/5">
                    <Link to="/" className="text-green-800 cursor-pointer hover:text-green-500">Home</Link>
                    <Link className="text-green-800 cursor-pointer hover:text-green-500">About</Link>
                    <Link to="/contact" className="text-green-800 cursor-pointer hover:text-green-500">Contact</Link>
                    <Link to="login" className="text-green-800 cursor-pointer hover:text-green-500">Login</Link>
                    <Link to="/logout" className="text-green-800 cursor-pointer hover:text-green-500">Logout</Link>
                </div>
            </nav>

            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>

                <Route path="/login">
                    <Login />
                </Route>

                <Route path="/logout">
                    <Logout />
                </Route>

            </Switch>
        </Router>
    )
}

export default Nav;
