import React from 'react';
//import { useContext } from 'react';
import ChangeCount from '../components/ChangeCount';
//import { CountContext } from '../context/CountContext'

//refatorando o hook
import { useCountContext } from '../hooks/UseCountContext';

const Home = () => {
    //consumindo
   // const { counter } = useContext(CountContext);
//invocando função e refatorando
    const { counter } = useCountContext();

    return (
        <>
            <h1>Home</h1>
            {/*consumindo */}
            <p>Valor do contato: {counter}</p>
            {/*alterando o contexto */}
            <ChangeCount/>
        </>
    )
}

export default Home;