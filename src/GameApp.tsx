import Notes from "./components/Notes";
import History from "./components/History";
import GameMaster from "./components/GameMaster";

function GameApp() {
  return (
    <div className="row">
      <div className="col">
        <Notes />
      </div>
      <div className="col d-flex justify-content-center align-items-center flex-column">
        <GameMaster />
        <History />
      </div>
      <div className="col"></div>
    </div>
  );
}

export default GameApp;
