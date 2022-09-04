import React from 'react'
import Header from './Components/Header/Header'
import './App.css'
import Layouts from './Components/Layouts'
import NewItem from './Components/NewItems/NewItem'
import Brands from './Components/Brands/Brands'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Registration from './Pages/Registration/Registration'
import AddItem from './Pages/AddItem/AddItem'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={[<Header />, <Layouts />, <NewItem />, <Brands />]} />
          <Route path="/registration" element={<Registration />}></Route>
          <Route path='/add' element={[<Header />, <AddItem/>]} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
