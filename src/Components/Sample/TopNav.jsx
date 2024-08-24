import React from 'react'

const TopNav = () => {
  return (
    <div className='top-nav flex justify-between items-center w-full relative top-0 left-0'>
      <div className='flex items-center'>
        <img src='../chevron-down.png'></img>
        <img src='../Download Files.png'></img>
        <div className='mx-3'>
            <p className='text-white font-semibold'>Amazing AI Shapes</p>
            <p className='text-gray-300'>Edited 5min Ago</p>
        </div>
      </div>
      <div className='text-editor text-white'>Text Editor</div>
      <div className='flex gap-3 mx-2'>
            <button className='share-button'>share<img src='../round arrow right.png'></img></button>
          <button className='publish-button'>publish<img src='../Files.png'></img></button>
      </div>
    </div>
  )
}

export default TopNav
