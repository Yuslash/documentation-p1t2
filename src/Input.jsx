import React, { useState } from 'react'
import axios from 'axios'

const Input = () => {
    const [name, setName] = useState('')
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const handleAddPost = () =>
    {
        const newPost = {name, title, content}

        axios.post('http://localhost:5000/add-post', newPost)
        
            .then(() =>
            {
                alert('post added')
                setName('')
                setTitle('')
                setContent('')
            })
        
    }

  return (
    <div className='mt-5 flex flex-col gap-5 bg-amber-400 p-5'>
        <input
        className=' px-3 p-1'
        type='text'
        placeholder='Enter a Name' 
        value={name}
        onChange={(e) => setName(e.target.value)}
            />
        <input
        className=' px-3 p-1'
        type='text' 
        placeholder='Enter a Title' 
        value={title}
        onChange={(e) => setTitle(e.target.value)} 
          />
        <input
        className=' px-3 p-1' 
        type='text' 
        placeholder='Enter a Content' 
        value={content} 
        onChange={(e) => setContent(e.target.value)}
        />

        <button onClick={handleAddPost}>Add on Post</button>
    </div>
  )
}

export default Input
