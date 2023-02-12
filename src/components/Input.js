import React from 'react'

const Input = ({ label, ...rest }) => {
    return (
        <div className='flex flex-col p-2 bg-transparent w-full items-center'>
            <div className='w-full max-w-[526px]'>
                <label className='font-bold text-xl text-slate-900'>{label}</label>
                <input className='px-4 py-2 w-full max-w-[526px] rounded border-2 border-slate-900 my-4' {...rest} />
            </div>
        </div>
    )
}

export default Input