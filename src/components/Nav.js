import React from 'react';

const Nav = () => {
    return (
        <nav className="bg-green-50 shadow-md w-screen px-4 py-5 flex mx-auto md:flex-row md:justify-between">
            <div className='md:w-2/5'>
                <p className="text-3xl font-medium duration-100 ease-in text-green-800 cursor-pointer hover:font-bolder hover:text-green-400">Zol-OnDoor</p>

            </div>
            <div className="flex md:flex-row md:justify-around md:w-3/5">
                <span className="text-green-800 cursor-pointer hover:text-green-500">Home</span>
                <span className="text-green-800 cursor-pointer hover:text-green-500">About</span>
                <span className="text-green-800 cursor-pointer hover:text-green-500">Contact</span>
            </div>
        </nav>
    )
}

export default Nav;
