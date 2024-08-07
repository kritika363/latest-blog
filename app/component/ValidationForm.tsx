"use client";
import React from 'react';
import { useState } from 'react';

const ValidationForm = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleForm = (e:any) => {
    e.preventDefault();
    // You can now handle or validate the form data
    console.log({
      userName,
      email,
      location,
      phone,
      message,
    });
    if (!userName || !email || !location || !phone || !message) {
      console.log("Not valid form")
    } else {
      console.log("valid form")
    }
  };
 
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
                <textarea name='message' placeholder='Message' onChange={(e) => setMessage(e.target.value)}></textarea>
                <button type="submit">Submit</button>
            </form>
    </div>
  )
}

export default ValidationForm