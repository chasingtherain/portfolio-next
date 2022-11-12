import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import { Element } from 'react-scroll'
function About() {


    return (
        <Element id='about' name='about'>
            <div id='about'>
                <TypeAnimation
                sequence={[
                    'Hi, I am JP. \nI develop apps with\nJavascript', 2750, 
                    'Hi, I am JP. \nI develop apps with\nReact', 2750, 
                    'Hi, I am JP. \nI develop apps with\nNode', 2750, 
                    'Hi, I am JP. \nI develop apps with\nNext', 2750, 
                    'Hi, I am JP. \nI develop apps with\nTailwind', 2750, 
                    'Hi, I am JP. \nI develop apps with\nFirebase', 2750, 
                    'Hi, I am JP. \nI develop apps with\nMongoDB', 2750, 
                    () => {
                    console.log('Done typing!');
                    }
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                style={{textAlign: "center" }}
                className="text-4xl my-20 whitespace-pre-line text-sky-300"
                speed="5"
                deletionSpeed="10"
                />
            </div>
        </Element>
    )
}

export default About