import React from 'react'

const DropdownMenu = ({ blogs = [], selectedName, onSelect }) => {
    return (
        <div className='p-4'>
            <label htmlFor='blog-select' className='block mb-2 text-white'>
                User Selection
            </label>
            <select
                id='blog-select'
                className='w-full p-2 border rounded bg-transparent border-transparent text-cyan-500'
                value={selectedName}
                onChange={(e) => onSelect(e.target.value)}
            >
                {blogs.length === 0 ? (
                    <option value="">No blogs available</option>
                ) : (
                    blogs.map(blog => (
                        <option key={blog.name} value={blog.name}>
                            {blog.name}
                        </option>
                    ))
                )}
            </select>
        </div>
    )
}

export default DropdownMenu
