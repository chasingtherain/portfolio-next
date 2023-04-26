import React, { useState, useEffect } from 'react'
import { TiledHexagons } from 'tiled-hexagons'

interface StackProps {
    iconRowOne:string[],
    iconRowTwo:string[]
}

function Stack({iconRowOne,iconRowTwo}: StackProps) {
    
    const [screenWidth, setScreenWidth] = useState<number>(0)
    const handleWindowSizeChange = () => {
        setScreenWidth(window.innerWidth);
    }
    
    const isMobile = (screenWidth <= 1000)
    console.log(isMobile, screenWidth)
    
    useEffect(() => {
        setScreenWidth(window.innerWidth)
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);


    return (
    <div className='my-24'>
        <p className='text-center text-[28px] text-sky-300 font-semibold mb-8'>Tech Stack</p>
        <span className='flex flex-wrap justify-center'>
            <TiledHexagons
                maxHorizontal={10}
                tileSideLengths={(screenWidth <= 1000) ? 40 : 60}
                tileElevations={8}
                tileGap={(screenWidth <= 1000) ? 5 : 10}
                tileBorderRadii={4}
                tiles={iconRowOne.map(icon => {return { img: `/assets/${icon}.svg` }})}
            />
        </span>
        <span className='flex flex-wrap justify-center'>
            <TiledHexagons
                maxHorizontal={10}
                tileSideLengths={(screenWidth <= 1000) ? 40 : 60}
                tileElevations={8}
                tileGap={(screenWidth <= 1000) ? 5 : 10}
                tileBorderRadii={4}
                tiles={iconRowTwo.map(icon => {return { img: `/assets/${icon}.svg` }})}
            />
        </span>
    </div>
    )
    }

export default Stack