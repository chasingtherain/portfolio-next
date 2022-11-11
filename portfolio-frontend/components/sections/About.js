import React from 'react'

function About() {
    const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'Next.js', 'HTML5', 'CSS3', 'Firebase', 'MongoDB'];

    return (
    <div>
            <p className='text-2xl'>I have built with: </p>
            <ul className="skills-list text-xl">
                {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
    </div>
    )
}

export default About