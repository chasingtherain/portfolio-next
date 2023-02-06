import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiFolder } from 'react-icons/fi'
import { BiLink } from 'react-icons/bi'

function Project({data}) {

    return (
            <div className="card md:w-96 md:h-72 bg-base-200 shadow-xl z-0 mx-8 md:mx-0">
                <div className="card-body">
                    <div className='flex gap-28 md:gap-48'>
                        <a className="text-4xl">
                            <FiFolder/>
                        </a>
                        <div className='flex gap-3 text-2xl mt-2'>
                            {data.repo && <a className="text-3xl" href={data.repo} target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
                            {data.liveSite && <a className="text-3xl" href={data.liveSite} target="_blank" rel="noopener noreferrer"><FiExternalLink/></a>}
                            {data.deck && <a className="text-3xl" href={data.deck} target="_blank" rel="noopener noreferrer"><BiLink /></a>}
                        </div>
                    </div>
                    <h2 className="card-title my-4">{data.title}</h2>
                    <p className='whitespace-pre-line'>{data.description}</p>
                    <div className="mt-2">
                        {data.stack.map((record, index) => <span key={index} class="badge text-slate-700 bg-sky-300 mx-1">{record}</span>)}
                    </div>
                </div>
            </div>
    )
}

export default Project