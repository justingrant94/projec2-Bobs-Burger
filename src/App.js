import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './components/Home'
import CharacterList from './components/animes/CharacterList'
import PageNavbar from './components/default/PageNavbar'
import NotFound from './components/default/NotFound'
import CharacterInfo from './components/animes/CharacterInfo'
import Episodes from './components/episodes/Episodes'
import PageFooter from './components/default/Pagefooter'

const App = () => {
  return (
    <main className='site-wrapper'>
      <BrowserRouter>
        <PageNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/episodes' element={<Episodes />} />
          <Route path='/animes' element={<CharacterList />} />
          <Route path='/animes/:id' element={<CharacterInfo />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
        <PageFooter />
      </BrowserRouter>
    </main>
  )
}

export default App
