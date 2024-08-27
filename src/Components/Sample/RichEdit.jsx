import React, { useState } from 'react'

const RichEdit = () => {

  const [count, setCount] = useState(12)

  return (
    <div className='rich-frame'>
    <div className='drop-inc-frame'>
          <div className='drop-show'>Montserrat <img src='../down.png'></img></div>
          <div className='increase-decrease'>
            <button onClick={()=> setCount(count - 1)}>-</button>
            <span>{count}</span>
            <button onClick={()=> setCount(count + 1)}>+</button>
          </div>
    </div>
    <div className='flex gap-3'>
      <div className='text-edit'>
          <button>B</button>
          <button>B</button>
          <button>B</button>
          <button>B</button>
      </div>

      <div className='color-button'>
        <input type='color'/>
      </div>
        <div className='text-edit'>
          <button>B</button>
          <button>B</button>
          <button>B</button>
        </div>
      </div>
      
    </div>
  )
}

export default RichEdit


