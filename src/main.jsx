import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GameEngineProvider } from './Context/useGameEngine.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  
  <GameEngineProvider>
  <BrowserRouter>
      <App />
    </BrowserRouter>
    </GameEngineProvider>

)

