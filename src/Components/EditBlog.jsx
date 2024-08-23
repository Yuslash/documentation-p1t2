import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DropdownMenu from './DropdownMenu'
import blogs from '../blogs.json'

const EditBlog = () => {
  
  const [blogsData, setBlogs] = useState(blogs)
  const [selectedName, setSelectedName] = useState(blogs[0].name)
  const [name, setName] = useState("")
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [isEditing, setIsEditing] = useState(false)
  
  const selectedBlog = blogsData.find(blog => blog.name === selectedName)

  useEffect(()=>
  {
    if (selectedBlog) {
      setName(selectedBlog.name)
      setTitle(selectedBlog.title)
      setContent(selectedBlog.content)
    }


  }, [selectedName, blogsData])

  const handleSave = async () => {
    const updatedPost = { name, title, content }
    // Ensure that the ID matches the one you want to edit
    await axios.put(`http://localhost:5000/edit-post/${selectedName}`, updatedPost)
    alert('Blog updated successfully!')

    setIsEditing(false)
  }

  useEffect(() => {
    const textarea = document.querySelector('.paragraph')

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
  }, [isEditing])

  return (
    <div className='container'>
      <div className='h-screen absolute w-72 bg-cyan-500 top-0 left-0'>
        <DropdownMenu
          blogs={blogsData}
          selectedName={selectedName}
          onSelect={setSelectedName}
        />
      </div>
      {isEditing ? (
        <div className='main'>
        <div className='main-edit flex flex-col gap-5 px-36'>
          <input
            className='p-2'
            type='text'
            placeholder='edit the previous Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className='p-2'
            type='text'
            placeholder='Edit The Previous Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
            <textarea
            className='paragraph p-2'
            type='text'
            placeholder='Edit the Previous Content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button className=' bg-violet-500 text-white px-4 py-2 rounded' onClick={handleSave}>
            save
          </button>
        </div>
      </div>
      ) : (
          <div className="display-text p-16">
          <h1 className='text-5xl font-bold'>{selectedBlog.name}</h1>
          <h1 className='text-3xl font-bold mt-2'>{selectedBlog.title}</h1>
          <p className='content mt-2'>{selectedBlog.content}</p>
        </div>
      )}

      <button
        onClick={() => setIsEditing(!isEditing)}
        className='edit-button absolute bg-blue-500 text-white px-4 py-2 rounded'
      >
        {isEditing ? 'cancel' : 'Edit'}
      </button>


    </div>
  )
}

export default EditBlog
