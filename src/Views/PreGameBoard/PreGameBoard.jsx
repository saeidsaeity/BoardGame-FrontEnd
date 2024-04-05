import { GameEngineProvider } from "../../Context/useGameEngine";
import GameBoard from "../GameBoard/GameBoard";

function PreGameBoard(){
    return (
        <div>
            <GameEngineProvider>
                <GameBoard/>
            </GameEngineProvider>
        </div>
    )
}



export default PreGameBoard