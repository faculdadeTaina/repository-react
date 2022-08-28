import { useContext } from "react";
import { CountContext } from "../context/CountContext";

export const useCountContext = () => {
    //criando o hook de context
    const context = useContext(CountContext);
    if (!context) {
        console.log("Context não encontrado");
    }

    return context;

}
