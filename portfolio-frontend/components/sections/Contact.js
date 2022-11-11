import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        console.log("email sent!")
        emailjs.sendForm('service_3jcixii', 'template_718m4ml', form.current, '3bT_6TR-kXdoEnPD-')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        console.log("form.current: ", form.current)
    }
    return (
        <form className='flex flex-cols' ref={form} onSubmit={sendEmail}>
            <label>Name</label>
            <input type="text" name="user_name" />
            <label>Email</label>
            <input type="email" name="user_email" />
            <label>Message</label>
            <textarea name="message" />
            <button type="submit" className='btn'>
                Send
            </button>
        </form>
    )
}

export default Contact