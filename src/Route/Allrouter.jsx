import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Women from '../Pages/Women'
import Kids from '../Pages/Kids'
import Topwear from '../Pages/Topwear'
import Bottomwear from '../Pages/Bottomwear'
import Sneakers from '../Pages/Sneakers'
import Accessories from '../Pages/Accessories'
import Collection from '../Pages/Collections'
import Shopbythemes from '../Pages/Shopbythemes'
import Signup from '../Components/Signup'
import Singal from '../Pages/Singal'

function Allrouter() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Women' element={<Women/>}></Route>
        <Route path='/Kids' element={<Kids/>}></Route>
        <Route path='/Topwear' element={<Topwear/>}></Route>
        <Route path='/Bottomwear' element={<Bottomwear/>}></Route>
        <Route path='/Sneakers' element={<Sneakers/>}></Route>
        <Route path='/Accessories' element={<Accessories/>}></Route>
        <Route path='/Collection' element={<Collection/>}></Route>
        <Route path='/Shopbythemes' element={<Shopbythemes/>}></Route>
        <Route path='/Signup' element={<Signup/>}></Route>
        <Route path='/Singal' element={<Singal/>}></Route>
      </Routes>
    </div>
  )
}

export default Allrouter