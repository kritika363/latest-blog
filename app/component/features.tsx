import React from 'react';
import Image from 'next/image';


const Features = () => {
  return (
    <div className='feature'>
        <div className="container gap-8 grid  grid-cols-4 bg-white">
            <div className='inner'>
                <Image src="/troubleshooting.png" width={60} height={60} alt='resolution'></Image>
                <h4 className='mt-3'>HIGH RESOLUTION</h4>
                <p>Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara incidid labore.</p>
            </div>
            <div className='inner'>
            <Image src="/display.png" width={60} height={60} alt='resolution'></Image>
                <h4 className='mt-3'>ULTIMITED FEATURES</h4>
                <p>Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara incidid labore.</p>
            </div>
            <div className='inner'>
            <Image src="/maintenance.png" width={60} height={60} alt='resolution'></Image>
                <h4 className='mt-3'>FREE SUPPORT</h4>
                <p>Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara incidid labore.</p>
            </div>
            <div className='inner'>
            <Image src="/program.png" width={60} height={60} alt='resolution'></Image>
                <h4 className='mt-3'>CLEAN CODES</h4>
                <p>Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara incidid labore.</p>
            </div>
        </div>
    </div>
  )
}

export default Features