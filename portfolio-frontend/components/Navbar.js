import React, { useEffect, useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll'
import { useDetectScroll } from "@smakss/react-scroll-direction";
import Link from 'next/link'

function Navbar() {

    const [scrollDirection, setScrollDirection] = useState("up")
    const [scrollDir] = useDetectScroll({});

    useEffect(()=>{
        setScrollDirection(scrollDir)
    },[scrollDir])
    
    const linkedInLink = (
        <a className="hover:text-sky-300 hover:cursor-pointer" href="https://www.linkedin.com/in/junpengtnia/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin/>
        </a>
    )

    const githubLink = (
        <a className="hover:text-sky-300 hover:cursor-pointer" href="https://github.com/chasingtherain" target="_blank" rel="noopener noreferrer">
            <FaGithub />
        </a>
    )

    return (
        <div className={`navbar z-10 bg-base-100 ${(scrollDirection !== "down") ? "sticky top-0 transition-all duration-700 opacity-100": "opacity-0"}`}>
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <ScrollLink 
                            to="about" 
                            smooth={true} 
                            duration={1500}
                            >
                                {/* using span to avoid hydration error */}
                                <span className='hover:text-sky-300 hover:cursor-pointer'>About</span>
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="projects"
                            spy={true}
                            smooth={true}
                            duration={1500}
                            >
                            <span className='hover:text-sky-300 hover:cursor-pointer'>Projects</span>
                        </ScrollLink>
                    </li>
                    <li>
                        <ScrollLink
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={1500}
                        >
                            <span className='hover:text-sky-300 hover:cursor-pointer'>Contact</span>
                        </ScrollLink>
                    </li>
                </ul>
                </div>
                <Link 
                    className="uppercase text-2xl mx-5 text-sky-300 semibold hover:text-sky-900 hover:cursor-pointer"
                    href="/"
                    >
                        JP
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal gap-8">
                <ScrollLink 
                    to="about" 
                    smooth={true} 
                    duration={1500}
                    >
                        {/* using span to avoid hydration error */}
                        <span className='hover:text-sky-300 hover:cursor-pointer'>About</span>
                </ScrollLink>
                <ScrollLink 
                    to="projects" 
                    spy={true} 
                    smooth={true} 
                    duration={1500} 
                    >
                    <span className='hover:text-sky-300 hover:cursor-pointer'>Projects</span>
                </ScrollLink>
                <ScrollLink 
                    to="contact" 
                    spy={true} 
                    smooth={true} 
                    duration={1500} 
                >
                    <span className='hover:text-sky-300 hover:cursor-pointer'>Contact</span>
                </ScrollLink>
                </ul>
            </div>
            <div className="navbar-end text-3xl gap-5 mr-2">
                {linkedInLink}
                {githubLink}
            </div>
        </div>
        )
}

export default Navbar