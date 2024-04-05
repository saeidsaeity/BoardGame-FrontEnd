import { Routes, Route } from "react-router-dom";
import { GameEngineProvider } from "./Context/useGameEngine";

import Home from "./Views/Home/Home";
import Login from "./Views/Login/Login";
import GameBoard from "./Views/GameBoard/GameBoard";
import Lobby from "./Views/Lobby/Lobby";
import PreGameBoard from "./Views/PreGameBoard/PreGameBoard";

import "./App.css";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/gameboard" element={<PreGameBoard />} />
        </Routes>
    </>
  );

}

export default App;
