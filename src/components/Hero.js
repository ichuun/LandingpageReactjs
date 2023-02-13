import React from 'react'
import Heros from '../assets/Hero.png'

const Hero = () => {
    return (
        <section className='w-full h-[800px]'>
            <div className='container mx-auto flex flex-row justify-between mb-[200px]'>
                <div className='mx-auto basis-1/2 h-[800px] items-center'>
                    <div className='DM Sans text-5xl mt-[171px] text-[#101C45]'>
                        <h1>Get the healthcare </h1>
                        <h1>you need, when you</h1>
                        <h1>need it.</h1>
                    </div>
                    <div className='DM Sans text-xl mt-[20px] mb-[30px]'>
                        <p>Manage all of your healthcare needs in one convenient</p>
                        <p>place - from booking appointments to tracking your health history.</p>
                    </div>
                    <button type='button' className='bg-[#101C45] text-white py-[8px] px-[24px]'>Book an Appointment</button>
                </div>
                <div className='md:flex md:basis-1/2 md:relative hidden'>
                    <div className='bg-[#9BEAE0] -skew-x-6 absolute w-full h-full'></div>
                    <div className='absolute inset-y-0 right-0'>
                        <img src={Heros} alt='' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;