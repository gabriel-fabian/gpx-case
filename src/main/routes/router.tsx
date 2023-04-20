import { MakeHomePage } from '../factories/pages/'

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MakeHomePage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
