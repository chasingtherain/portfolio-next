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
                        'Hi, I am JP. \nI develop apps with\nJavascript', 2750,
                        'Hi, I am JP. \nI develop apps with\nReact', 2750,
                        'Hi, I am JP. \nI develop apps with\nNode', 2750,
                        'Hi, I am JP. \nI develop apps with\nNext', 2750,
                        'Hi, I am JP. \nI develop apps with\nJest', 2750,
                        'Hi, I am JP. \nI develop apps with\nMongoDB', 2750,
                        'Hi, I am JP. \nI develop apps with\nFirebase', 2750,
                        'Hi, I am JP. \nI develop apps with\nTailwind', 2750,
                        'Hi, I am JP. \nI develop apps with\nMaterial UI', 2750,
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