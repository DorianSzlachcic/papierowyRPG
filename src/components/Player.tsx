import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";
import { StatType } from "./GameList";
import StatsList from "./StatsList";

interface Character {
    id: number;
    name: string;
    description: string;
    story: string;
    statsType: StatType;
}

const testCharacter: Character = {
    id: 0,
    name: "",
    description: "",
    story: "",
    statsType: "D&D"
}

function Player() {
  const [player, updatePlayer] = useState();
  return (
    <>
      <div 
        style={{ 
          width: "100%", 
          height: "100%", 
          border: "2px solid #ccc", 
          overflowY: "auto",
          padding: "10px",
          boxSizing: "border-box"
        }}
      >
        <div>
          <h2>Player</h2>
        </div>

        <div>
          <p className="fs-3">Name: {testCharacter.name}</p>
          <button className="btn btn-primary" type="button">Edit Name</button>

          <br/>
          <br/>
          <label className="fs-4">Stats:</label>
          <StatsList statsType="D&D" />
          <button className="btn btn-primary" type="button">Edit Stats</button>

          <br/>
          <br/>
          <label className="fs-4">Description:</label>
          <p>{testCharacter.description}</p>
          <button className="btn btn-primary" type="button">Edit Description</button>

          <br/>
          <br/>
          <label className="fs-4">Story:</label>
          <p>{testCharacter.story}</p>
          <button className="btn btn-primary" type="button">Edit Story</button>
        </div>
      </div>
    </>
  );
}
export default Player;
