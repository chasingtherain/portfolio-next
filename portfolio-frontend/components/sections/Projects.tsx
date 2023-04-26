import React from 'react'

import Project from '../../components/Project'
import { Element } from 'react-scroll'
import { projectData } from '../../data/projectData'

function Projects() {
    return (
        <Element id='projects' name='projects'>
            <div className='my-20 md:mx-40 z-10'>
                <p className='text-[28px] text-center mb-8 text-sky-300'>Featured Projects</p>
                <div className="flex flex-wrap justify-center gap-8">
                    {projectData.map((record, index) => <Project 
                        key={index}            
                        title={record.title}
                        description={record.description}
                        stack={record.stack}
                        deck={record.deck || ""}
                        repo={record.repo || ""}
                        liveSite={record.liveSite || ""}             
                        />)}
                </div>
            </div>
        </Element>
    )
}

export default Projects