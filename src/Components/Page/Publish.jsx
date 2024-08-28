import React, { useState } from 'react'
import DisplayValue from '../../Store/DisplayValue'
import { useDispatch } from 'react-redux'
import blogs from '../../blogs.json'

export const unpatch = () => {

  const [blogsData, setBlogsData] = useState(blogs)
  
  const firstBlog = blogsData[0].name
  
  const dispatch = useDispatch()

  dispatch({ type: 'SET_VALUE', payload: firstBlog })
}

const Publish = () => 
{
  return (
    <div>
    <button onClick={unpatch}>button</button>
      <h1>how are you</h1>
      <DisplayValue />
    </div>
  )
}

export default Publish
