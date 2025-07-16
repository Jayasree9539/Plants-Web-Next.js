"use client";
import { navLinks } from '@/constant/constant';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { FaSeedling } from 'react-icons/fa'; 
import { HiBars3BottomRight } from 'react-icons/hi2';

type Props = {
    openNav:() => void;
};

const Nav: React.FC<Props> = ({ openNav }) => {

    const [navbg, setNavbg] = useState(false)

    useEffect(()=> {
        const handler = ()=> {
            if(window.scrollY >=90) setNavbg(true);
            if(window.scrollY <90) setNavbg(false);
        };
        window.addEventListener('scroll',handler);

        return()=> window.removeEventListener('scroll',handler);
    },[]);

  return (
    <div className={`transition-all ${navbg?'bg-white shadow-md':'fixed'} duration-200 h-[12vh] z-[100] fixed w-full`}>
        <div className='flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto'>
            {/* LOGO */}
            <div className='flex items-center space-x-2'>
                <div className='w-10 h-10 bg-green-800 rounded-full flex items-center justify-center flex-col'>
                <FaSeedling className='w-6 h-6 text-white' />
                </div>
                <h1 className='text-xl hidden sm:block md:text-2xl text-green-900 font-bold'>INTERIO</h1>
            </div>
            {/* NavLinks */}
            <div className='hidden lg:flex items-center space-x-10'>
                {navLinks.map((link) => {
                    return (
                        <Link href={link.url} key={link.id} className="text-black hover:text-green-700 font-semibold transition-all duration-200">
                            <p>{link.label}</p>
                        </Link>
                    )
                })}
            </div>
            {/* Buttons */}
            <div className='flex items-center space-x-4'>
                <a href="#_" className="relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-600 via-green-800 to-green-900"></span>
                    <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                    <span className="relative text-white">Create Account</span>
                </a>
                {/* burger menu */}
                <HiBars3BottomRight 
                onClick={openNav} 
                className='w-8 h-8 cursor-pointer text-black lg:hidden'/>
            </div>
        </div>
    </div>
    
  )
}

export default Nav;
