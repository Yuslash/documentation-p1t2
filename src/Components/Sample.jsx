import React, {useState} from 'react'
import blogs from '../blogs.json'

const Sample = () => {
    
    const [blogsData, setBlogs] = useState(blogs)
    const [selectedName, setSelectedName] = useState(blogs[0].name)
    const selectedBlog = blogsData.find(blog => blog.name === selectedName)

  return (
<>
    <div>
          <h1>{selectedBlog.name}</h1>
      <h1>{selectedBlog.title}</h1>
          <h1>{selectedBlog.content}</h1>
    </div>
</>
  )
}

export default Sample
