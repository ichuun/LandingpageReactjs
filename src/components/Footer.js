import React from 'react'
import Icondate from '../assets/icondate.png'
import Reminder from '../assets/iconreminder.png'
import Virtual from '../assets/iconvirtual.png'

const Footer = () =>{
    return (
        <section className='w-full -mt-[10px]'>
            <div className='container mx-auto flex flex-row bg-[#203271] p-10 gap-x-[32px]'>
                <div className='flex flex-row gap-x-[25px]'>
                    <div className='p-1'>
                        <img src={Icondate} alt='' />
                    </div>
                    <div className='text-white DM Sans'>
                        <h1 className='font-bold'>Online Appointment Scheduling</h1>
                        <p>Allows users to schedule appointments with their healthcare provider through the app.</p>
                    </div>
                </div>
                <div className='flex flex-row gap-x-[25px]'>
                    <div className='p-1'>
                        <img src={Reminder} alt='' />
                    </div>
                    <div className='text-white DM Sans'>
                        <h1 className='font-bold'>Medication Reminder</h1>
                        <p>Allows users to schedule appointments with their healthcare provider through the app.</p>
                    </div>
                </div>
                <div className='flex flex-row gap-x-[25px]'>
                    <div className='p-1'>
                        <img src={Virtual} alt='' />
                    </div>
                    <div className='text-white DM Sans'>
                        <h1 className='font-bold'>Virtual Consultation</h1>
                        <p>Allows users to schedule appointments with their healthcare provider through the app.</p>
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Footer;