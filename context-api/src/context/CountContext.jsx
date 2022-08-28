
//criar um contexto
import { createContext, useState } from 'react';

  //alterar as coisas
export const CountContext = createContext();

  //provendoa alteranao
  export const CountContextProvider = ({ children }) => {
      const [counter, setCounter] = useState(6);

      return (
          <CountContext.Provider value={{counter,setCounter}}>
          {children}
          </CountContext.Provider>
      )

  }
    