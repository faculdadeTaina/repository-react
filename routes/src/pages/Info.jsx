import React from 'react';

import { useParams } from 'react-router';

const Info = () => {
    const { id } = useParams();

    return (
        <>
            <h2>Mais informações sobre o produto:{id}</h2>
        </>
    )
}

export default Info;