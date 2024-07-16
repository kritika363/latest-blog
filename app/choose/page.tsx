import React from 'react';
import Accordion from '../component/accordian/page';
import Image from 'next/image';
const Choose = () => {
  return (
    <div className="choose relative py-20 mt-30">
        <div className="container">
            <div className="outer grid-cols-2 gap-4 grid">
                <div className="left">
                <h3 className='text-4xl mb-3 font-700'>Why  <span className='text-red-800'>Choose US</span></h3>
          <p>Lorem ipsum dolor sit amet, consectetur ili adipiscing Donec elit Donec nec eros eget adipiscing elit cenasgue ut ulricis ctetur ili adipiscing Do cenasgue ut ut eget…</p>
          
        <Accordion/>

                </div>
                <div className="right">
               <Image src='/digital.png' alt='digital' width={550} height={550}></Image>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Choose