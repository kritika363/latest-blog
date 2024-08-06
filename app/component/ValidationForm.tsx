"use client";
import React from 'react';
import { useState } from 'react';

const ValidationForm = () => {
  const [userName, setUserName] = useState(null);
  const [email, setEmail] = useState(null);
  const [location, setLocation] = useState(null);
  const [phone, setPhone] = useState(null);
    const handleForm = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
       console.log(e)
    }
  return (
    <div>
         <form onSubmit={handleForm}>
                <div className='grid grid-cols-4 gap-6'>
                <input
            type="text"
            name="name"
            placeholder='Name'
            onChange={(e) => setUserName(e.target.value)}
          />
                <input type="email" name="email"  placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/>
                <input type="text" name="location"  placeholder='Location' onChange={(e)=>setLocation(e.target.value)}/>
                <input type="text" name="phone"  placeholder='Phone Number' onChange={(e)=>setPhone(e.target.value)}/>             
                </div>
                <textarea name='message' placeholder='Message'></textarea>
                <button type="submit">Submit</button>
            </form>
    </div>
  )
}

export default ValidationForm