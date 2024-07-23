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
        <li><Link href="/">Services</Link></li>
        <li><Link href="/aboutpage">About Us</Link></li>
        <li><Link href="/">Features</Link></li>
        <li><Link href="/">Contact Us</Link></li>
        </ul>
      </div>     
    </div>
  )
}

export default Navbar