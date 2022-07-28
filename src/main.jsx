import React from 'react'
 //cor do react

import ReactDOM from 'react-dom/client'
import { App } from './App'

//document objet model (representação do html pelo javascript)


ReactDOM.createRoot(document.getElementById('root')).render(
  //render = mostrar em tela
  <React.StrictMode>
  <App />
  </React.StrictMode>
)
