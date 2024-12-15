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
      <button
        className="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        Player
      </button>
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex={-1}
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <h2 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">
            Player
          </h2>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        
        <div className="ms-3">
            <p className="fs-3">Name: {testCharacter.name}</p>
            <label className="fs-4">Stats:</label>
                <StatsList statsType="D&D"/>
            <label className="fs-4">Description:</label>
                <p className="m-3">{testCharacter.description}</p>
            <label className="fs-4">Story:</label>
                <p className="m-3">{testCharacter.story}</p>
          </div>

      </div>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
      </div>
    </>
  );
}
export default Player;