import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiFolder } from 'react-icons/fi'
import { BiLink } from 'react-icons/bi'

function Project({data}) {

    return (
            <div className="card md:w-96 md:h-72 bg-base-200 shadow-xl z-0 mx-8 md:mx-0">
                <div className="card-body">
                    <div className='flex justify-around gap-36 md:gap-64'>
                        <a className="flex justify-start text-4xl" href="" target="_blank" rel="noopener noreferrer">
                            <FiFolder/>
                        </a>
                        <div className='flex gap-3 text-2xl mt-2'>
                            {data.liveSite && <a className="" href={data.liveSite} target="_blank" rel="noopener noreferrer"><FiExternalLink/></a>}
                            {data.repo && <a className="" href={data.repo} target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
                            {data.deck && <a className="" href={data.deck} target="_blank" rel="noopener noreferrer"><BiLink /></a>}
                        </div>
                    </div>
                    <h2 className="card-title">{data.title}</h2>
                    <p className='mt-2 whitespace-pre-line'>{data.description}</p>
                    <div className="mt-2">
                        {data.stack.map((record, index) => <span key={index} class="badge text-slate-700 bg-sky-300 mx-1">{record}</span>)}
                    </div>
                </div>
            </div>
    )
}

export default Project