import React from 'react';

import { useFetch } from '../hook/useEffet';
import { useSearchParams,Link } from 'react-router-dom';

const Search = () => {
    //só quero pegar
    const [ searchParamas ] = useSearchParams();
//enviando perguntas
    const url = "http://localhost:5000/products?" + searchParamas;
//hook
    const { data: items, loading, error } = useFetch(url);

    return (
        <>
           
            <p>Resultados encontrados</p>

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

        </>
    )
}

export default Search;