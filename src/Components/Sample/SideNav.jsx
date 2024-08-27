import React, { useEffect, useState } from 'react'
import DropdownMenu from '../DropdownMenu'
import blogs from '../../blogs.json'

const SideNav = () => {

  const [blogsData, setBlogs] = useState(blogs)
  const [selectedName, setSelectedName] = useState(blogs[0].name)
  const [name, setName] = useState("")
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const selectedBlog = blogsData.find(blog => blog.name === selectedName)

  useEffect(() => {
    if (selectedBlog) {
      setName(selectedBlog.name)
      setTitle(selectedBlog.title)
      setContent(selectedBlog.content)
    }


  }, [selectedName, blogsData])



  return (
    <div className='side-nav'>
      <DropdownMenu
        blogs={blogsData}
        selectedName={selectedName}
        onSelect={setSelectedName}
      />
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
