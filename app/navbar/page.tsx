
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='navbar py-4'>
      <div className="container md:mx-auto  flex justify-between items-center md:px-0 px-2">
        <Link href="/"><Image src="/logo.png" alt="" width={200} height={90}></Image></Link>
        
        <ul className='navlinks md:flex hidden'>
        <li> <Link href="/">Home</Link></li>
        <li><Link href="#services">Services</Link></li>
        <li><Link href="#about">About Us</Link></li>
        <li><Link href="#features">Features</Link></li>
        <li><Link href="#contact">Contact Us</Link></li>
        </ul>

      
        <button className='md:hidden group'>
         <div className='w-6 h-1 bg-black mb-1'></div>
         <div className='w-6 h-1 bg-black mb-1'></div>
         <div className='w-6 h-1 bg-black mb-1'></div>
        
         <ul className='bg-slate-300 navlinks md:hidden flex flex-col space-y-3 w-screen absolute -top-full right-0 duration-150 group-focus:top-0'>
         <button className='px-10 py-8  relative ml-auto'>
         <div className='w-6 h-1 rotate-45 absolute bg-black mb-1'></div>
         <div className='w-6 h-1 -rotate-45 absolute bg-black mb-1'></div></button>
        <li className='bg-slate-300 w-full d-flex justify-center'> <Link href="/">Home</Link></li>
        <li  className='w-full bg-slate-300 d-flex justify-center'><Link href="#services">Services</Link></li>
        <li className='w-full bg-slate-300 d-flex justify-center'><Link href="#about">About Us</Link></li>
        <li className='w-full bg-slate-300 d-flex justify-center'><Link href="#features">Features</Link></li>
        <li className='w-full bg-slate-300 d-flex justify-center'><Link href="#contact">Contact Us</Link></li>
        </ul>
        </button>
       
      </div>     
    </div>
  )
}

export default Navbar