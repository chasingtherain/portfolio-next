import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import { Element } from 'react-scroll'

function Contact() {
    const form = useRef();

    const[isDisabled, setIsDisabled] = useState(true)
    const[isLoading, setIsLoading] = useState("")
    const[name, setName] = useState()
    const[email, setEmail] = useState()
    const[message, setMessage] = useState()


    const sendEmail = (e) => {
        e.preventDefault();
        if(name === "" || email === "") {
            return toast.warning("Fill in all blanks!")
        }
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
        <div>
            <Element name='contact'>
                <p className='text-center text-[28px] text-sky-300'>Get In Touch</p>
            </Element>
            <div className='bg-base-700 md:mx-64 rounded-md'>
                <form className='flex flex-col md:mx-56' ref={form} onSubmit={sendEmail} onChange={()=> setIsDisabled(false)}>
                    <label className='mx-6 mt-12'>Name</label>
                    <input className='input my-2 mx-6 bg-slate-50 rounded-md text-black' type="text" name="user_name" value={name} onChange={(e)=> setName(e.target.value)}/>
                    <label className='mx-6'>Email</label>
                    <input className='input my-2 mx-6 bg-slate-50 rounded-md text-black' type="email" name="user_email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    <label className='mx-6'>Message</label>
                    <textarea className='bg-base-100 my-2 mx-6 bg-slate-50 rounded-md text-black' rows="3" name="message" value={message} onChange={(e)=> setMessage(e.target.value)} />
                    <button className={`btn bg-sky-300 text-white my-6 mx-6 rounded-md ${isLoading} hover:bg-green-700`} disabled={isDisabled} type="submit">
                        Send
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact