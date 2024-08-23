import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BlogList from './Components/BlogList'
import EditBlog from './Components/EditBlog'
import Input from './Input'
import Blog from './Blog'

function App() {


  return (
    <Router>  
      <div>
        <Routes>
          <Route path='/' element={<Blog />} />
          <Route path='/edit' element={<EditBlog />} />
          <Route path='/add' element={<Input />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
