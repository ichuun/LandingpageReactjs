import React from 'react'
import Logo from '../assets/Logo.png'
import { useState, useEffect } from 'react';

const Header = () => {
    const [bg, setBg] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            return window.scrollY > 50 ? setBg(true) : setBg(false)
        })
    })

    return (
        <header className={`${bg ? 'bg-white' : 'bg-none'} w-full py-5 fixed z-40`}>
            <div className='container mx-auto md:flex justify-between items-center md:px-0 px-8 bg-white md:bg-transparent'>
                <div className='md:flex md:flex-row gap-x-28'>
                    <div className='flex flex-row gap-x-4 my-4 md:my-0'>
                        <img src={Logo} alt='' />
                        <a className='font-semibold' href='#'>HaloDek</a>
                    </div>
                    <div className='text-2xl md:hidden absolute right-6 top-8 cursor-pointer'>
                        <ion-icon onClick={() => setOpen(!open)} name={`${open ? 'close-circle-outline' : 'grid-outline'}`}></ion-icon>
                    </div>
                    <div className={`${open ? '' : 'hidden'} flex`}>
                        <ul className='md:flex md:flex-row gap-x-14'>
                            <li className='font-semibold my-4 md:my-0' ><a href='#'>Home</a></li>
                            <li className='my-4 md:my-0'><a href='#'>Feature</a></li>
                            <li className='my-4 md:my-0'><a href='#'>Blog</a></li>
                            <li className='my-4 md:my-0'><a href='#'>About Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className={`${open ? '' : 'hidden'} flex`}>
                    <ul className='md:flex md:flex-row gap-x-14 items-center font-semibold'>
                        <li ><a href='#'>Login</a></li>
                        <li className='border-2 border-black py-2 px-4 my-4 md:my-0'><a href='#'>Book Now</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;