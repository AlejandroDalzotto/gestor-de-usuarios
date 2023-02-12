import React from 'react'

const Card = ({ children }) => {
    return (
        <div className='bg-slate-50 rounded p-10 flex flex-col items-center gap-0 justify-center mx-auto max-w-[524px]'>{children}</div>
    )
}

export default Card
