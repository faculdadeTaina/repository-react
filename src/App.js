//import logo from './logo.svg';
import './App.css';

import {useState, useEffect} from "react";
//4 custom hook
import { useFetch } from './hook/useEffet';
console.log("oi")
function App() {

  const url="http://localhost:3000/products";

  const [products, setProdutos] = useState([]);
  //5 - refatorando post
  const [config, setConfig]=useState(null);
  const [method, setMethod]=useState(null);
  const [callFetch, setcallFetch]=useState(false)

  //4 - custom
  const {data:items} = useFetch(url);


  //enviar dados
  const [name, setName] = useState("");
  const [price, setPrice]=useState("");

  //1 - resgatando dados
  useEffect( () =>{
    async function fetchData(){

      const res =await fetch(url);
      const data =await res.json();

      setProdutos(data);
    }
    
    fetchData();

  }, [url, callFetch]);

  //5-refatorando o post
  useEffect(()=>{

  }, )
 // console.log(products);
// 2 - adicionando produtos
const handleSubmit=async(e)=>{
  e.preventDefault();
  //enviando para o backend
  const product={
    //chaves
    name,
    price,
  };

  console.log(product)
//criando o method post
//requisição
  const res=await fetch(url, {
    method: "POST",
    headers:{
      //enviando json
      "Content-Type":"application/json",
    },
    //corpo da requisão
    body: JSON.stringify(product),

  });
 // 3 - carregamenot dinamico
 //carreando itens na tela
 const addeProduct=await res.json();

 setProdutos((prevProducts)=> [...prevProducts, addeProduct]);
//resetando o valor 
setName("");
setPrice("");
}
 //resposta
// console.log(product)
  return (
    <div className="App">
     
          <h1>Lista de produtos</h1>
        
        <ul>
         {/* {products.map((product)=>(
          <li key={product.id}>
            {product.name} - R$: {product.price}
          </li>

         ))}  */}

        {items && items.map((product)=>(
          <li key={product.id}>
            {product.name} - R$: {product.price}
          </li>

          ))}


        </ul>

    <div className='add-product'>
          <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input type="text" 
              value={name} 
              name="name"
              onChange={(e)=> setName(e.target.value)}
              />
            </label>
            <label>
              Preço:
              <input type="number" 
              value={price} 
              name="price"
              onChange={(e)=> setPrice(e.target.value)}
              />
            </label>
            <input className='button' 
            type="submit" 
             value="Criar"
             />
          </form>
    </div> 

    </div>
  );

}

export default App;
