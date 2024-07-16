import React from 'react'

const Videoplayer = () => {
  return (
    <div className='mt-10 videoSection'>
         <video controls width="100%" height={170} autoPlay loop> 
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default Videoplayer