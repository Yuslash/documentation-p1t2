import React, { useState } from 'react'
import axios from 'axios'
import blogs from '../blogs.json'

const EditBlog = () => {

  const [name, setName] = useState(blogs[1].name)
  const [title, setTitle] = useState(blogs[1].title)
  const [content, setContent] = useState(blogs[1].content)
  const [isEditing, setIsEditing] = useState(false)

  const handleSave = async () => {
    const updatedPost = { name, title, content }
    // Ensure that the ID matches the one you want to edit
    await axios.put(`http://localhost:5000/edit-post/${blogs[1].name}`, updatedPost)
    alert('Blog updated successfully!')

    setIsEditing(false)
  }

  const firstBlogs = blogs[1]

  return (
    <div>

      <h1>Edit Blog 2 (blogs[1])</h1>
      {isEditing ? (
        <div className='mt-5 flex flex-col gap-5 bg-cyan-400 p-5'>
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
          <input
            className='p-2'
            type='text'
            placeholder='Edit the Previous Content'
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button className=' bg-violet-500 text-white px-4 py-2 rounded' onClick={handleSave}>
            save
          </button>


        </div>
      ) : (
        <div className="mt-5" >
          <h1 className='text-5xl font-bold'>{firstBlogs.name}</h1>
          <h1 className='text-3xl font-bold mt-2'>{firstBlogs.title}</h1>
          <p className='mt-2'>{firstBlogs.content}</p>
        </div>
      )}

      <button
        onClick={() => setIsEditing(!isEditing)}
        className='mt-3 bg-blue-500 text-white px-4 py-2 rounded'
      >
        {isEditing ? 'cancel' : 'Edit'}
      </button>


    </div>
  )
}

export default EditBlog
