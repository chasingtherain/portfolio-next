import React from 'react'
import { foundationData } from '../../data/foundationData'
import CardWithLinks from '../CardWithLinks'


function Foundation() {
  return (
    <div className='my-20 md:mx-40 z-10'>
        <p className='text-[28px] text-center mb-8 text-sky-300'>CS Foundation</p>
        <div className="flex flex-wrap justify-center gap-8">
            {foundationData.map((record, index) => <CardWithLinks key={index} foundationData={record}/>)}
        </div>
    </div>
  )
}

export default Foundation