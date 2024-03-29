import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

// Imports
import EmpListing from './EmpListing'
import EmpCreate from './EmpCreate'
import EmpDetail from './EmpDetail'
import EmpEdit from './EmpEdit'
// import EmpDelete from './EmpDelete'

function App() {
  return (
    <div className='App'>
      <div className='m-5'></div>
      <h1>ReactJS CRUD Employee Project</h1>
      <div className='m-5'></div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<EmpListing />}></Route>
          <Route path='/employee/create' element={<EmpCreate />}></Route>

          <Route path='/employee/detail/:empid' element={<EmpDetail />}></Route>
          <Route path='/employee/edit/:empid' element={<EmpEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
