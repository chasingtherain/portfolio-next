import React from 'react'

function FoundationCard({foundationData}) {
  return (
    <div className="card w-80 h-60 md:w-96 md:h-72 bg-base-200 shadow-xl z-0 mx-8 md:mx-0">
    <div className="card-body">
        <h2 className="card-title my-4">{foundationData.title}</h2>
        <p className='whitespace-pre-line'>{foundationData.description}</p>
        {/* <div className="mt-2">
            {data.stack.map((record, index) => <span key={index} className="badge text-slate-700 bg-sky-300 mx-1">{record}</span>)}
        </div> */}
    </div>
</div>
  )
}

export default FoundationCard