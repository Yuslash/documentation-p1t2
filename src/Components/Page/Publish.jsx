import React, { useState } from 'react'
import DisplayValue from '../../Store/DisplayValue'
import { useDispatch } from 'react-redux'
import blogs from '../../blogs.json'

const Publish = () => 
{

  const firstBlog = blogs[0].name

  const [blogsData, setBlogsData] = useState(blogs)

  const dispatch = useDispatch()

  const unpatch = () => 
  {
    dispatch({ type: 'SET_VALUE', payload: 42})
  }

  return (
    <div>
    <button onClick={unpatch}>button</button>
      <h1>how are you</h1>
      <DisplayValue />
    </div>
  )
}

export default Publish
