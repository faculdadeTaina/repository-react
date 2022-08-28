import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import {CountContextProvider} from './context/CountContext'
import { TitleColorProvider } from "./context/TitleColor";
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		{/*criando provider */}
		<CountContextProvider>
		<App/>
		</CountContextProvider>
		
	</React.StrictMode>
)