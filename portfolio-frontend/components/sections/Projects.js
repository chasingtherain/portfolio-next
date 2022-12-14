import React from 'react'
import data from '../../data'
import Project from '../../components/Project'
import { Element } from 'react-scroll'

function Projects() {
    return (
        <Element id='projects' name='projects'>
            <div className='my-36 md:mx-40 z-10'>
                <p className='text-[28px] text-center mb-8 text-sky-300 font-semibold'>Some apps I have built: </p>
                <div className="flex flex-wrap justify-center gap-8">
                    {data.map((record, index) => <Project key={index} data={record}/>)}
                </div>
            </div>
        </Element>
    )
}

export default Projects