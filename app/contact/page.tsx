"use cclient";
import React from 'react';
import ValidationForm from '../component/ValidationForm';

const Contact = () => {
  return (
    <div id="contact">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54913.9443932125!2d76.78318864868781!3d30.65870628791348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feb365ab1fd83%3A0x4bd8ef389a18e7cc!2sZirakpur%2C%20Punjab!5e0!3m2!1sen!2sin!4v1721574522389!5m2!1sen!2sin" width="100%" height="450"  allowFullScreen></iframe>
        <div className="container-fluid mx-8 bg-white grid gap-4 contact-sctn">
            <div>
                <h3 className='mb-4'> GET IN TOUCH</h3>
                <p className='mb-2'><b>Email:</b> discover@gmail.com</p>
                <p className='mb-2'><b>Phone Number:</b> +34 928 514200</p>
                <p className='mb-2'>Street no doky street 2440/x New Villa 14X USA</p>
            </div>
            <div>
           <ValidationForm/>
            </div>
        </div>
    </div>
  )
}

export default Contact