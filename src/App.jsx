import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import BeerList from './pages/BeerList'
import RandomBeerDetail from './pages/RandomBeerDetail'
import BeerDetail from './pages/BeerDetail'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/beers' element={<BeerList/>} />
      <Route path='/beers/:id' element={<BeerDetail/>} />
      <Route path='/random' element={<RandomBeerDetail/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App