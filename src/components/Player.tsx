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
    name: "Kael the Brave",
    description: "A seasoned warrior clad in battered armor, Kael wields a massive sword with unmatched skill. Fierce and determined, he carries the scars of countless battles",
    story: "Born in a small mountain village, Kael trained relentlessly to protect his home from raiders. After his village fell, he now roams the land, seeking redemption and a new purpose in the chaos of war.",
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
          <label className="fs-4">Stats:</label>
          <StatsList statsType="D&D" />
          <label className="fs-4">Description:</label>
          <p>{testCharacter.description}</p>
          <label className="fs-4">Story:</label>
          <p>{testCharacter.story}</p>
        </div>
      </div>
    </>
  );
}
export default Player;
