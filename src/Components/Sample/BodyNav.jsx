import React from 'react'
import SideNav from './SideNav'
import InnerBody from './InnerBody'

const BodyNav = () => {
  return (
    <div className='body-nav py-1'>
      <SideNav />
      <InnerBody />
    </div>
  )
}

export default BodyNav
