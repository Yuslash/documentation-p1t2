import React from 'react'
import blogs from '../blogs.json'

const BlogList = () => {

  const intialBlog = blogs[0]

  return (
    <div className='mt-5'>
      <h1 className='text-5xl font-bold'>{intialBlog.name}</h1>
      <h2 className='text-3xl font-bold mt-2'>{intialBlog.title}</h2>
      <p className='mt-2'>{intialBlog.content}</p>
    </div>
  )
}

export default BlogList
