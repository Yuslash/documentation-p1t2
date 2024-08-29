import React, { useState } from 'react'
import DisplayValue from '../../Store/DisplayValue'
import { useDispatch } from 'react-redux' 

const Publish = () => 
{
    const unpatch = () => {

    const dispatch = useDispatch()

    dispatch({ type: 'SET_VALUE', payload: firstBlog })
  }

  return (
    <div>
    <button onClick={unpatch}>button</button>
      <h1>how are you</h1>
    </div>
  )
}

export default Publish
