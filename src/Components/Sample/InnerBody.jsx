import React from 'react'
import RichEdit from './RichEdit'
import blogs from '../../blogs.json'

const InnerBody = () => {

  const checkBlog = blogs[1]

  return (
    <div className='inner-body'>
    
      <RichEdit />
      <div className='flex flex-col'>
        <input className=' bg-transparent details-content mt-5 text-white font-semibold text-4xl' value={checkBlog.title}></input>
        <textarea className='content-detail bg-transparent mt-3 text-white text-2xl'  value={checkBlog.content}></textarea>
      </div>
    </div>
  )
}

export default InnerBody
