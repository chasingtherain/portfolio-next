import React from 'react'

type Course = {
  name: string;
  url: string;
}

interface CardWithLinksProps {
  foundationData: {
      title: string,
      description: string,
      courses: Course[]
  }
}

function CardWithLinks({foundationData}: CardWithLinksProps) {
  return (
    <div className="card w-80 h-60 md:w-96 md:h-72 bg-base-200 shadow-xl z-0 mx-8 md:mx-0">
    <div className="card-body">
        <h2 className="card-title my-1">{foundationData.title}</h2>
        {!foundationData.courses.length && <p className='whitespace-pre-line'>{foundationData.description}</p>}
        <div className="mt-1">
            {foundationData.courses.map((record, index) => 
            record.url ?
            <a href={record.url} key={index} className="card mb-2 hover:text-sky-300 underline decoration-sky-400" target="_blank">
                {record.name}
            </a> : <p key={index}>{record.name}</p>)}
        </div>
    </div>
</div>
  )
}

export default CardWithLinks