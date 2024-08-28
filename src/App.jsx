import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import BlogList from './Components/BlogList'
import EditBlog from './Components/EditBlog'
import DropdownMenu from './Components/DropdownMenu'
import Sammple from './Components/Sample.jsx'
import Input from './Input'
import Publish from './Components/Page/Publish.jsx'

function App() {

  return (
    <Router>  
      <div>
        <Routes>
          <Route path='sample' element={<Sammple />} />
          <Route path='/' element={<BlogList />} />
          <Route path='/edit' element={<EditBlog />} />
          <Route path='/add' element={<Input />} />
          <Route path='/select' element={<DropdownMenu />} />
          <Route path='/publish' element={<Publish />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
