import React from 'react';
import './contact.css';

function Contact() {
  return (
    <div className='contact'>
        <h1 className='title'>Contact Me</h1>
        <p className='subtext'>Hi there, contact me to ask me about anything you have in mind.</p>
        <form action="">
            <div className="formInputName">
                <label htmlFor="">First name</label>
                <input type="text" id='first_name' placeholder='Enter your firstname' />
            </div>
            <div className="formInputName">
                <label htmlFor="">Last name</label>
                <input type="text" id='last_name' placeholder='Enter your last name' />
            </div>
            <div className="formInputOthers">
                <label htmlFor="">Email</label>
                <input type="email" id='email' placeholder='yourname@email.com' />
            </div>
            <div className="formInputOthers">
                <label htmlFor="">Message</label>
                <textarea rows={10} id='message' placeholder="Send me a message and I'll reply you as soon as possible..." />
            </div>
            <div className="formInput">
                <input type="checkBox" className='check'  />
                <label htmlFor="">You agree to providing your data to name who may contact you.</label>
            </div>
            <button id='btn__submit'>Send message</button>
        </form>
    </div>
  )
}

export default Contact