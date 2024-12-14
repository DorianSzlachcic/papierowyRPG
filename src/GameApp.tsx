import Notes from "./components/Notes";
import History from "./components/History";

function GameApp() {
  return (
    <div className="row">
      <div className="col">
        <Notes />
      </div>
      <div className="col">
        <History />
      </div>
      <div className="col"></div>
    </div>
  );
}

export default GameApp;
