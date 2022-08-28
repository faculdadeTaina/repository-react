import React, { createContext , useReducer} from 'react';

//contexto de um jeito mais complexo

export const TitlecolorContext = createContext();

export const TitleColorContextProvider = ({ children }) => {
    return (
        <TitlecolorContext.Provider>

            {children}
        </TitlecolorContext.Provider>
    )
}
