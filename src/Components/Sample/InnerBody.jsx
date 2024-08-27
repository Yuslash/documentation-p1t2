import React, { useEffect, useState } from 'react'
import RichEdit from './RichEdit'
import blogs from '../../blogs.json'
import DropdownMenu from '../DropdownMenu'

const InnerBody = () => {

  const [blogsData, setBlogsData] = useState(blogs)
  const [selectedName, setSelectedName] =useState(blogs[0].name)
  const [name , setName] = useState("")
  const [title, setTitle] = useState("")
  const [content , setContent] = useState("")

  const selectedBlog = blogsData.find(blog => blog.name === selectedName)

  const checkBlog = blogs[1]

  useEffect(() =>
  {
     
    if (selectedBlog) {
      setName(selectedBlog.name)
      setTitle(selectedBlog.title)
      setContent(selectedBlog.content)
    }
    
  },[selectedName,blogsData])

  return (
    <div className='inner-body'>

      <DropdownMenu
        blogs={blogsData}
        selectedName={selectedName}
        onSelect={setSelectedName}
      />
    
      <RichEdit />
      <div className='flex flex-col'>

        <input 
         className=' bg-transparent details-content mt-5 text-white font-semibold text-4xl'
         value={title}
         ></input>


        <textarea 
         className='content-detail bg-transparent mt-3 text-white text-2xl' 
         value={content}
         readOnly
         ></textarea>


      </div>
    </div>
  )
}

export default InnerBody
