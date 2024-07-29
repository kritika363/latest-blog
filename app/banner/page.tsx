import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className='banner relative'>
        <Image src="/banner.png" alt='banner img' layout='fill' objectFit='cover'></Image>
        <div className='banner-content absolute top-0 inset-x-0 w-100 h-full flex text-white text-center items-center'>
          <div className="container">
            <h1 className='md:text-8xl text-5xl font-extrabold mb-4'>DISCOVER</h1>
            <p><span  className='px-5 py-2 bg-green-400 text-white'>OUR FEATURED TEMPLATES OF THIS WEEK</span></p>
          </div>
        </div>
    </div>
  )
}

export default Banner