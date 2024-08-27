import React from 'react'
import RichEdit from './RichEdit'
import blogs from '../../blogs.json'

const InnerBody = () => {
  return (
    <div className='inner-body'>
      <RichEdit />
      <div className='details-content mt-5'>content</div>
      <div className='details-content mt-3'>content</div>
    </div>
  )
}

export default InnerBody
