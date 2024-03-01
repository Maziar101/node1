import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import TourDetails from './Pages/Tour-details'

export default function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/tours/:id/:name' element={<TourDetails/>}/>
    </Routes>
  )
}
