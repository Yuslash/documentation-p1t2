import React from 'react'

const RichEdit = () => {
  return (
    <div className='rich-frame'>
    <div className='drop-inc-frame'>
          <div className='drop-show'>Montserrat <img src='../down.png'></img></div>
          <div className='increase-decrease'>
            <button>-</button>
            <span>12</span>
            <button>+</button>
          </div>
    </div>

    <div className='text-edit'>
        <button>B</button>
        <button>B</button>
        <button>B</button>
        <button>B</button>
    </div>

    </div>
  )
}

export default RichEdit
