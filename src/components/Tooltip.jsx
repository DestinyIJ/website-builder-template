import React from 'react'

const Tooltip = ({ children }) => {
    return (
        <div className='absolute inset-y-0 left-12 hidden group-hover:flex items-center'>
            <div className=' relative whitespace-nowrap px-4 py-2 bg-white rounded-md font-semibold text-sm shadow-lg drop-shadow-lg text-gray-900'>
                <div className='absolute inset-y-0 -left-1 flex items-center'>
                    <div className='h-2 w-2 rotate-45 bg-blue-600' />
                </div>
                {children}
            </div>
        </div>
    )
}

export default Tooltip