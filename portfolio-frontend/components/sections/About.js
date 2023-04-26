import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Element } from 'react-scroll'
function About({textAnimation}) {


    return (
            <div>
                <Element id='about' name='about'>
                    {/* done to ensure animation scrolls to top when selected */}
                    <div className='invisible'>Hello, i am invisible</div>
                </Element>
                <div id='about'>
                    <TypeAnimation
                    sequence={textAnimation}
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