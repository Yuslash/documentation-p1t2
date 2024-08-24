import React from 'react'
import TopNav from './Sample/TopNav'
import BodyNav from './Sample/BodyNav'

const Sample = () => {
  return (
    <div className='sample w-screen h-screen flex flex-col absolute top-0 left-0 p-3'>
        <TopNav />
        <BodyNav />
    </div>
  )
}

export default Sample
