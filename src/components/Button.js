import React from 'react'

const Button = ({ children }) => {
    return (
        <button className='border-2 border-slate-900 rounded py-2 px-4 bg-slate-900 text-slate-50 font-bold sm:hover:bg-slate-50 sm:hover:text-slate-900 w-32 sm:transition-all'>{children}</button>
    )
}


export default Button