import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiFolder } from 'react-icons/fi'
import { BiLink } from 'react-icons/bi'
import { Element } from 'react-scroll';

function OpenSource() {

    return (
        <div className=''>
            <Element name='opensource'>
                <p className='text-[28px] text-center my-6 text-sky-300'>Open Source Contributions</p>
            </Element>
            <div className="card w-4/5 md:w-1/4 md:h-72 bg-base-200 flex mx-auto">
                <div className="card-body">
                    <div className='flex gap-28 md:gap-48'>
                        <a className="text-4xl">
                            <img src='/assets/open-source.png' className='text-5xl'/>
                        </a>
                    </div>
                    <h2 className="card-title my-4">Houseform</h2>
                    <p className='whitespace-pre-line'>A field-first, Zod-powered, headless, runtime agnostic form validation library for React.</p>
                    <p className=''>
                        <span className='badge text-slate-700 bg-sky-300'>Typescript</span>
                        <span className='badge text-slate-700 bg-sky-300 mx-1'>Zod</span>
                        <span className='badge text-slate-700 bg-sky-300 mx-1'>CI/CD</span>
                        <span className='badge text-slate-700 bg-sky-300 mx-1'>Automated testing</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OpenSource