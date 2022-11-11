import React from 'react'
import data from '../../data'
import Project from '../../components/Project'

function Projects() {
    return (
            <div>
                <p className='text-2xl text-center mb-4'>Some things I have built</p>
                <div className="flex flex-wrap justify-center gap-8">
                    {data.map((record, index) => <Project key={index} data={record}/>)}
                </div>
            </div>
    )
}

export default Projects