import React from 'react'
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink, FiFolder } from 'react-icons/fi'

function Project({data}) {

    return (
            <div className="card w-96 bg-base-200 shadow-xl">
                <div className="card-body">
                    <div className='flex justify-around gap-56'>
                        <a className="flex justify-start text-4xl" href="" target="_blank" rel="noopener noreferrer">
                            <FiFolder/>
                        </a>
                        <div className='flex gap-3 text-2xl mt-2'>
                            {data.liveSite && <a className="" href={data.liveSite} target="_blank" rel="noopener noreferrer"><FiExternalLink/></a>}
                            {data.repo && <a className="" href={data.repo} target="_blank" rel="noopener noreferrer"><FaGithub /></a>}
                        </div>
                    </div>
                    <h2 className="card-title">{data.title}</h2>
                    <p className='mt-2'>{data.description}</p>
                    <div className="">
                        {data.stack.map((record, index) => <span key={index} class="badge text-slate-700 bg-sky-300 mx-1">{record}</span>)}
                    </div>
                </div>
            </div>
    )
}

export default Project