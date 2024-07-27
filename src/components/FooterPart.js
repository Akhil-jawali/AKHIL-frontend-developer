import React from 'react'
import logo from '../assets/img/logo.png'

const FooterPart = () => {
    return (
        <div>
            <div className='md:px-20 px-7 bg-black w-full flex items-start py-10 gap-y-7 grid grid-cols-12'>
                <div className='flex flex-col md:col-span-3 col-span-12 items-start gap-3'>
                    <img src={logo} alt="" />
                    <p className='text-base text-white w-2/3'>@akhil-jawali has designed this website</p>
                </div>
                <div className='flex flex-col md:col-span-3 col-span-4 items-center gap-2'>
                    <p className='md:text-xl text-base text-white font-medium'>Title-1</p>
                    <button role='button' className='md:text-lg text-sm text-gray-500 hover:text-white font-normal'>Home</button>
                    <button role='button' className='md:text-lg text-sm text-gray-500 hover:text-white font-normal'>Home</button>
                    <button role='button' className='md:text-lg text-sm text-gray-500 hover:text-white font-normal'>Home</button>
                    <button role='button' className='md:text-lg text-sm text-gray-500 hover:text-white font-normal'>Home</button>
                </div>
                <div className='flex flex-col md:col-span-3 col-span-4 items-center gap-2'>
                    <p className='md:text-xl text-base text-white font-medium'>Title-1</p>
                    <button role='button' className='md:text-lg text-sm text-gray-500 hover:text-white font-normal'>Home</button>
                    <button role='button' className='md:text-lg text-sm text-gray-500 hover:text-white font-normal'>Home</button>
                    <button role='button' className='md:text-lg text-sm text-gray-500 hover:text-white font-normal'>Home</button>
                    <button role='button' className='md:text-lg text-sm text-gray-500 hover:text-white font-normal'>Home</button>
                </div>
                <div className='flex flex-col md:col-span-3 col-span-4 items-center gap-2'>
                    <p className='md:text-xl text-base text-white font-medium'>Title-1</p>
                    <button role='button' className='md:text-lg text-sm text-gray-500 hover:text-white font-normal'>Home</button>
                    <button role='button' className='md:text-lg text-sm text-gray-500 hover:text-white font-normal'>Home</button>
                    <button role='button' className='md:text-lg text-sm text-gray-500 hover:text-white font-normal'>Home</button>
                    <button role='button' className='md:text-lg text-sm text-gray-500 hover:text-white font-normal'>Home</button>
                </div>
            </div>
        </div>
    )
}

export default FooterPart
