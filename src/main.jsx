import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { BoardGameProvider } from './Context/BoardGameContext.jsx'

const container = document.getElementById('root');

const root = createRoot(container);
  root.render(
    <BoardGameProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </BoardGameProvider>
  )

