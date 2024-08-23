import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BlogList from './Components/BlogList'
import EditBlog from './Components/EditBlog'
import DropdownMenu from './Components/DropdownMenu'
import Input from './Input'

function App() {

  return (
    <Router>  
      <div>
        <Routes>
          <Route path='/' element={<BlogList />} />
          <Route path='/edit' element={<EditBlog />} />
          <Route path='/add' element={<Input />} />
          <Route path='/select' element={<DropdownMenu />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
