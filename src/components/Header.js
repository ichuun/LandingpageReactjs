import React from 'react'
import Logo from '../assets/Logo.png'

const Header = () =>{
    return (
        <header className='w-full py-5 fixed z-40'>
            <div className='container mx-auto flex justify-between items-center'>
                <div className='flex flex-row gap-x-28'>
                    <div className='flex flex-row gap-x-4'>
                        <img src={Logo} alt='' />
                        <a  className='font-semibold' href='#'>HaloDek</a>
                    </div>
                    <div className='flex'>
                        <ul className='flex flex-row gap-x-14'>
                            <li className='font-semibold' ><a>Home</a></li>
                            <li><a>Feature</a></li>
                            <li><a>Blog</a></li>
                            <li><a>About Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className='flex'>
                    <ul className='flex flex-row gap-x-14 items-center font-semibold'>
                        <li><a>Login</a></li>
                        <li className='border-2 border-black py-2 px-4'><a>Book Now</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;