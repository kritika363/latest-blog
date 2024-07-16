import React from 'react'

interface data{
kv : {
    title:string,
    body:string
}
}
const Postdata = (bb : data) => {
  return (
    <div className='inner bg-white p-5 border-r-8 rounded-xl'><h4>
        {bb.kv.title}</h4>
        <p>{bb.kv.body}</p></div>
  )
}

export default Postdata