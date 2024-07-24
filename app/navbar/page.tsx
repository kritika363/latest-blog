import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className='navbar py-4'>
      <div className="container md:mx-auto  flex justify-between items-center">
        <Link href="/"><Image src="/logo.png" alt="" width={200} height={90}></Image></Link>
        <ul className='navlinks flex'>
        <li> <Link href="/">Home</Link></li>
        <li><Link href="#services">Services</Link></li>
        <li><Link href="#about">About Us</Link></li>
        <li><Link href="#features">Features</Link></li>
        <li><Link href="#contact">Contact Us</Link></li>
        </ul>
      </div>     
    </div>
  )
}

export default Navbar