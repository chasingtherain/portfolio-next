import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Element } from 'react-scroll'
function About() {


    return (
            <div>
                <Element id='about' name='about'>
                    {/* done to ensure animation scrolls to top when selected */}
                    <div className='invisible'>Hello, i am invisible</div>
                </Element>
                <div id='about'>
                    <TypeAnimation
                    sequence={[
                        'Hi, I am JP. \nI develop apps with\nJavascript', 2700,
                        'Hi, I am JP. \nI develop apps with\nReact', 2700,
                        'Hi, I am JP. \nI develop apps with\nNode', 2700,
                        'Hi, I am JP. \nI develop apps with\nReact Query', 2700,
                        'Hi, I am JP. \nI develop apps with\nNext', 2700,
                        'Hi, I am JP. \nI develop apps with\nPostgres', 2700,
                        'Hi, I am JP. \nI develop apps with\nFirebase', 2700,
                        'Hi, I am JP. \nI develop apps with\nMongoDB', 2700,
                        // 'Hi, I am JP. \nI develop apps with\nGraphQL', 2700,
                        'Hi, I am JP. \nI develop apps with\nTailwind', 2700,
                        'Hi, I am JP. \nI develop apps with\nJest', 2700,
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    style={{textAlign: "center" }}
                    className="text-5xl my-20 whitespace-pre-line text-sky-300"
                    speed="5"
                    deletionSpeed="10"
                    />
                </div>
            </div>
        
    )
}

export default About