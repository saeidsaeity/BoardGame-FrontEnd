import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import Login from "./Views/Login/Login";
import GameBoard from "./Views/GameBoard/GameBoard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/gameboard" element={<GameBoard />} />
      </Routes>
    </>
  );
}

export default App;
