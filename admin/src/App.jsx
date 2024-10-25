import React from 'react'
import Navbar from './components/navbar/Navbar'
import Sidebar from './components/sidebar/Sidebar'
import Add from './pages/add/Add'
import {Route, Routes} from 'react-router-dom'
import Orders from './pages/orders/Orders'
import List from './pages/list/List'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className="app-content">
        <Sidebar/>
        <Routes>
          <Route path='/add' element={<Add/>}/>
          <Route path='/list' element={<List/>}/>
          <Route path='/orders' element={<Orders/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
