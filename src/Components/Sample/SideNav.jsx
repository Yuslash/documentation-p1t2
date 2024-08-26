import React from 'react'

const SideNav = () => {
  return (
    <div className='side-nav'>
          <div className='user-selection text-white text-center'><p>User Selection</p></div>
          <div className='side-bo'>
        <button><img src='../Header.png'></img>Header</button>
        <button><img src='../Header.png'></img>Title</button>
        <button><img src='../Header.png'></img>Paragraph</button>
        <button><img src='../Header.png'></img>Paragraph</button>
          </div>
    </div>
  )
}

export default SideNav
