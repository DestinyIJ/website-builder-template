import React from 'react'
import { BsPencilSquare } from "react-icons/bs"

const Editing = ({ title }) => {
  return (
    <>
        <div className="absolute pointer-events-none inset-0 rounded hidden group-focus-within:block border-2 border-blue-600">
            <div className='absolute -translate-y-full pl-2'>
                <div className='flex items-center gap-x-2 bg-blue-600 text-white px-3 py-1 rounded-t-lg'>
                    <span className='text-sm'>{title}</span>
                    <BsPencilSquare className='h-4 w-4 fill-current' />
                </div>
            </div>          
        </div>
        <div className="hidden group-focus-within:flex h-2 w-2 rounded-full border-2 border-blue-600 absolute left-1 top-1 -translate-x-full -translate-y-full" />
        <div className="hidden group-focus-within:flex h-2 w-2 rounded-full border-2 border-blue-600 absolute left-1 bottom-1 -translate-x-full translate-y-full" />
        <div className="hidden group-focus-within:flex h-2 w-2 rounded-full border-2 border-blue-600 absolute right-1 top-1 translate-x-full -translate-y-full" />
        <div className="hidden group-focus-within:flex h-2 w-2 rounded-full border-2 border-blue-600 absolute right-1 bottom-1 translate-x-full translate-y-full" />
        <div className="hidden group-focus-within:flex h-2 w-2 rounded-full border-2 border-blue-600 absolute left-1/2 top-0 z-50 bg-white -translate-y-1/2" />
        <div className="hidden group-focus-within:flex h-2 w-2 rounded-full border-2 border-blue-600 absolute left-1/2 bottom-0 z-50 bg-white translate-y-1/2" />
    </>
  )
}

export default Editing