import React from 'react';

import { useParams, Link} from 'react-router-dom';

import { useFetch } from '../hook/useEffet';


const Product=()=>{
  //rotas dinamicas
  const {id} = useParams();
  // carregamento dado individual
  const url = "http://localhost:5000/products/" + id
  
  const {data: product, loading, error} = useFetch(url)
  //console.log(product);

  return (
    <div>
    <h1>Product </h1>
      <p>Id do produto {id}</p>
      {error && <p>Ocorreu um erro ..</p>}
      {loading && <p>Ocorreu um erro ..</p>}
      {product && (
        <>
          <h1>{product.name}</h1>
          <p>{product.price}</p>
          {/*nested routes*/}
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </>
      )}
    </div>
  )
}

export default Product;