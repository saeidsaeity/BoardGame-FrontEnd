import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Views/Home/Home";
import Login from "./Views/Login/Login";
import GameBoard from "./Views/GameBoard/GameBoard";
import Lobby from "./Views/Lobby/Lobby";
import { GameEngineProvider } from "./Context/useGameEngine";

function App() {
  return (
    <>
      <GameEngineProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/gameboard" element={<GameBoard />} />
        </Routes>
      </GameEngineProvider>
    </>
  );

}

export default App;
