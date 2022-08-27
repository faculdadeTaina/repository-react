import React from 'react';

//redirecionar dentro do componente

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SearchForm= () => {
    const navigate = useNavigate();
    const [query, setQuery] = useState();

    const handleSumit = (e) => {
        e.preventDefault();
        navigate('/search?q=' + query);

    }

    return (
        <>
            <h2>Search form</h2>
            <form onSubmit={handleSumit}>
                <input type="text" onChange={(e) => setQuery(e.target.value)} />
                <input type="submit" value="Buscar"/>
            </form>
        </>

    )
}

export default SearchForm;