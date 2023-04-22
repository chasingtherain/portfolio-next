import React from 'react'
import { Element } from 'react-scroll';
import { BiLink } from 'react-icons/bi'

function OpenSource() {
    const stack = ['Typescript','Zod','CI/CD','Automated testing']
    return (
        <div className=''>
            <Element name='opensource'>
                <p className='text-[28px] text-center my-8 text-sky-300'>Open Source Contributions</p>
            </Element>
            <div className="card w-4/5 md:w-1/4 md:h-72 bg-base-200 flex mx-auto">
                <div className="card-body">
                    <div className='flex gap-28 md:gap-48'>
                        <a className="text-4xl">
                            <img src='/assets/open-source.png' className='text-5xl'/>
                        </a>
                        <a className="hover:text-sky-300 cursor-pointer text-3xl" href="https://github.com/houseform" target="_blank" rel="noopener noreferrer">
                            <BiLink/>
                        </a>
                    </div>
                    <h2 className="card-title my-4">Houseform</h2>
                    <p className='whitespace-pre-line'>A field-first, Zod-powered, headless, runtime agnostic form validation library for React.</p>
                    <p>
                        {stack.map((record,index) => <span key={index} className='badge text-slate-700 bg-sky-300 mx-1'>{record}</span>)}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OpenSource