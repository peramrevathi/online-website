
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './App.css'
import LandingPage from './source/pages/LandingPage'
import KitchenPage from './source/pages/KitchenPage'
import MobilePage from './source/pages/MobilePage'
import MenWearPage from './source/pages/MenWearPage'
import WomenPage from './source/pages/WomenPage'
import CosmeticsPage from './source/pages/CosmeticsPage'
import WatchPage from './source/pages/WatchPage'
import BooksPage from './source/pages/BooksPage'
import ToysPage from './source/pages/ToysPage'
import BagsPage from './source/pages/BagsPage'
import GroceriesPage from './source/pages/GroceriesPage'
import PharmacyPage from './source/pages/PharmacyPage'
 import MobileSingles from './source/singles/MobileSingles'
import MenWearSingles from './source/singles/MenWearSingles'
import WomenSingles from './source/singles/WomenSingles'
import WatchSingles from './source/singles/WatchSingles'
import KitchenSingles from './source/singles/KitchenSingles'
import BagSingles from './source/singles/BagSingles'
import BookSingles from './source/singles/BookSingles'
import ToysSingles from './source/singles/ToysSingles'
import CosmeticsSingles from './source/singles/CosmeticsSingle'
import PharmacySingles from './source/singles/PharmacySingles'
import GroceriesSingles from './source/singles/GroceriesSingles'
import SignInPage from './source/pages/SigninPage'
import UserCart from './source/UserCart'



const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/signIn' element = {<SignInPage/>}/>
        <Route path='/' element = {<LandingPage/>}/>
        <Route path='/kitchen' element = {<KitchenPage/>}/>
        <Route path='/mobiles' element = {<MobilePage/>}/>
        <Route path='/menwear' element = {<MenWearPage/>}/>
        <Route path='/women' element = {<WomenPage/>}/>
        <Route path='/cosmetics' element = {<CosmeticsPage/>}/>
        <Route path='/watch' element = {<WatchPage/>}/>
        <Route path='/books' element = {<BooksPage/>}/>
        <Route path='/toys' element = {<ToysPage/>}/>
        <Route path='/bags' element = {<BagsPage/>}/>
        <Route path='/groceries' element = {<GroceriesPage/>}/>
        <Route path='/pharmacy' element = {<PharmacyPage/>}/>
            <Route path = '/mobiles/:id' element ={<MobileSingles/>}/>
            <Route path = '/menwear/:id' element ={<MenWearSingles/>}/>
            <Route path = '/women/:id' element ={<WomenSingles/>}/>
            <Route path = '/watch/:id' element ={<WatchSingles/>}/>
            <Route path = '/kitchen/:id' element ={<KitchenSingles/>}/>
            <Route path = '/bags/:id' element ={<BagSingles/>}/>
            <Route path = '/books/:id' element ={<BookSingles/>}/>
            <Route path = '/toys/:id' element ={<ToysSingles/>}/>
            <Route path = '/cosmetics/:id' element ={<CosmeticsSingles/>}/>
            <Route path = '/pharmacy/:id' element ={<PharmacySingles/>}/>
            <Route path = '/groceries/:id' element ={<GroceriesSingles/>}/>
            <Route path = '/cart' element ={<UserCart/>}/>
          
           

            



      </Routes>
    </div>
  )
}

export default App
