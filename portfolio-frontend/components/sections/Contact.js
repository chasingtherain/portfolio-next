import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

function Contact() {
    const form = useRef();

    const[isDisabled, setIsDisabled] = useState(true)
    const[isLoading, setIsLoading] = useState("")
    const[name, setName] = useState()
    const[email, setEmail] = useState()
    const[message, setMessage] = useState()


    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading("loading")
        console.log("email sent!")
        emailjs.sendForm('service_3jcixii', 'template_718m4ml', form.current, '3bT_6TR-kXdoEnPD-')
        .then((result) => {
            console.log(result.text);
            toast.success("Message sent!")
            setIsLoading("")
            setIsDisabled(true)
            setName("")
            setEmail("")
            setMessage("")
        }, (error) => {
            console.log(error.text);
            setIsLoading("")
            setIsDisabled(true)
            setName("")
            setEmail("")
            setMessage("")
        });
    }
    return (
        <div className='card border-2 mt-6 mx-64 bg-slate-900'>
            <p className='text-center text-3xl mt-8'>Get In Touch</p>
            <form className='flex flex-col mx-56' ref={form} onSubmit={sendEmail} onChange={()=> setIsDisabled(false)}>
                <label>Name</label>
                <input className='input my-2' type="text" name="user_name" value={name} onChange={(e)=> setName(e.target.value)}/>
                <label>Email</label>
                <input className='input my-2' type="email" name="user_email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <label>Message</label>
                <textarea className='bg-base-100 my-2' rows="3" name="message" value={message} onChange={(e)=> setMessage(e.target.value)} />
                <button className={`btn bg-sky-400 text-white my-6 ${isLoading}`} disabled={isDisabled} type="submit">
                    Send
                </button>
            </form>
        </div>
    )
}

export default Contact