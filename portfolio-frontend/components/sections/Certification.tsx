import React from 'react'
import { certificationData } from '../../data/certificationData'
import CardWithLinks from '../CardWithLinks'


function Certification() {
  return (
    <div className='my-20 md:mx-40 z-10'>
        <p className='text-[28px] text-center mb-8 text-sky-300'>CS Certification</p>
        <div className="flex flex-wrap justify-center gap-8">
            {certificationData.map((record, index) => <CardWithLinks key={index} foundationData={record}/>)}
        </div>
    </div>
  )
}

export default Certification