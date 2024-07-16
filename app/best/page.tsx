import React from 'react';
import Image from 'next/image';
import Videoplayer from '../component/Videoplayer';
import Features from '../component/features';

const Bestmarketing = () => {
  return (
    <div className='text-center best  pb-20'  >
      <div className="container">
      <Image src="/marketing.png" width={120} height={120} alt='marketing'></Image>
         <h2 className='text-4xl mb-3 font-700'>Amazing  <span className='text-red-800'> Features</span></h2>
        <p className='w-full lg:w-4/5 mx-auto'>Lorem ipsum dolor sit amet, consectetur ili adipiscing Donec nec eros eget cenasgue ut ultricies elit Donec nec eros eget adipiscing elit cenasgue ut ulricis Ulimes guedolor sit amet, conse ctetur ili adipiscing Donec nec eros eget cenasgue ut ut eget…</p>
      
      </div>
      <Videoplayer/>
          <Features/>
    </div>
  )
}

export default Bestmarketing