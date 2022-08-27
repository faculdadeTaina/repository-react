import * as React from 'react';

import './App.css';
//configurando páginas
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
//pages
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
//components
import Navbar from './components/Navbar';

import SearchForm from './components/SearchForm';

//se fosse carregar dados

function App() {
  return (
    <main>
      <h1>React</h1>
      <BrowserRouter>
        <Navbar />
        {/*search */}
        <SearchForm/>
      <Routes>
        {/*
       
        {/*Vai se repetir em todas as rotas*/}
        
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
        
        {/*4 - Rota dinamica*/}
        
    <Route path="/products/:id" element={<Product/>}/>
          {/*Nested route */}
    <Route path="/products/:id/info" element={<Info/>}/>
    {/*Buscar */}
    <Route path="/search" element={<Search /> } />
          {/*redirect */}
    <Route path="/campany" element={<Navigate to="/about"/>}/>
          {/* no match route*/}
      <Route path="*" element={<NotFound/>}/>
      
      
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;