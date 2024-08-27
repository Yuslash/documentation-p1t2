import React, { useEffect, useState } from 'react'
import axios from 'axios'
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

  useEffect(() => {
    const textarea = document.querySelector('.paragraph')

    /**
     * to auto height adjust
     */
    const handleKeyUp = (e) => {
      textarea.style.height = 'auto' // Reset the height
      let sHeight = e.target.scrollHeight // Get scrollHeight
      textarea.style.height = `${sHeight}px` // Set new height
    }


    if (textarea) {
      textarea.addEventListener('keyup', handleKeyUp) // Add the keyup event listener
    }

    return () => {
      if (textarea) {
        textarea.removeEventListener('keyup', handleKeyUp) // Clean up event listener
      }
    }
  }, [])

  /**
   * for the save or update to the blogs.json
   */
  const handleSave = async () =>
    {
      
      const updatePost = {name,title,content}
      
      //Ensuer that the id matches the one you want to edit
      await axios.put(`http://localhost:5000/edit-post/${selectedName}`, updatePost)
      alert(`Blog Updated Successfully!`)
    }

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
         className=' p-2 bg-transparent text-white text-4xl'
         value={title}
         onChange={(e) => setTitle(e.target.value)}
         ></input>


        <textarea 
         className='paragraph p-2'
         value={content}
         onChange={(e) => setContent(e.target.value)}
         ></textarea>


      </div>
      <button className='m-6' onClick={handleSave}>button</button>
    </div>
  )
}

export default InnerBody
