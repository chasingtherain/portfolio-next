import React from 'react'
import data from '../../data'
import Project from '../../components/Project'
import { Element } from 'react-scroll'

function Projects() {
    return (
        <Element id='projects' name='projects'>
            <div className='my-36 md:mx-40 z-10'>
                <p className='text-[28px] text-center mb-8 text-sky-300'>Some apps I have built</p>
                <div className="flex flex-wrap justify-center gap-8">
                    {data.map((record, index) => <Project key={index} data={record}/>)}
                </div>
                <p className='text-[28px] text-center my-12 text-sky-300'>Open Source Contributions</p>
                <p className='text-md text-center'>Coming soon</p>
            </div>
        </Element>
    )
}

export default Projects