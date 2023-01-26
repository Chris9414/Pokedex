import { useState } from 'react'
import {HashRouter, Link, Route, Routes} from 'react-router-dom'
import './App.css'
import InputName from './components/InputName'
import Pokedex from './components/Pokedex'
import PokemonDetails from './components/PokemonDetails'
import ProtectedRoutes from './components/ProtectedRoutes'
import header from './assets/images/header.png'


function App() {
  

  return (
    <div >
      <HashRouter>
        <header>
          <img src={header} alt="" />
        </header>
        <Routes>
          <Route path='/' element={<InputName/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path='/Pokedex' element={<Pokedex/>}/>
            <Route path='/Pokedex/:id' element={<PokemonDetails/>}/>
          </Route>
        </Routes>
      </HashRouter>
    </div>
  )
}

export default App
