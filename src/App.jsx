
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './Views/Home';
import Login from './Views/Login';
function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </>
  )
}

export default App
