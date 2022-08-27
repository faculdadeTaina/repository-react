import React from  'react';
import './Home.css'

import { Link } from 'react-router-dom';

import { useFetch } from '../hook/useEffet';

const Home=()=>{
   //carregamento de dados
   const url = 'http://localhost:5000/products';
  const {data:items, loading, error}=useFetch(url);
  
  return (
   <div>
     {/*funcionar basta fazer o http*/}
    <div>Produtos</div>
    {error &&
    <p>{error}</p>
    }
<ul className="products">
  {items && 
    items.map((item)=>(
  <li key ={item.id}>
    <h2>{item.name}</h2>
    
    <p>R$: {item.price}</p>
    {/*4 - rota dinamica*/}
    <Link to={`/products/${item.id}`}>Detalhes</Link>
    
  </li>
  ))}
</ul>
     </div>
  )
}

export default Home;