import Notes from "./components/Notes";
import History from "./components/History";
import GameMaster from "./components/GameMaster";
import Skills from "./components/Skills";
import Items from "./components/Items";
import CharacterInfo from "./components/CharacterInfo";

function GameApp() {
  return (
    <div className="row vh-100">
      <div className="col">
        <Notes />
      </div>
      <div className="col d-flex justify-content-center align-items-center flex-column h-100">
        <GameMaster />
        <div className="overflow-scroll">
          <History />
        </div>
      </div>
      <div className="col">
        <div className="h-33">
          <CharacterInfo />
        </div>
        <div className="h-33 overflow-scroll">
          <Skills />
        </div>
        <div className="h-33 overflow-scroll">
          <Items />
        </div>
      </div>
    </div>
  );
}

export default GameApp;
