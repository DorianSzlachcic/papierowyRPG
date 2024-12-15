import { useState } from "react";
import "./styles.css";

// Zdefiniowanie interfejsu dla postaci
interface Character {
  name: string;
  hp: number;
}

function CharacterInfo() {
  const [character, setCharacter] = useState<Character>({
    name: "Hero",
    hp: 100,
  });

  return (
    <div className="card">
      <h2 className="card-header">Character Info</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <form className="item-form">
            <div className="form-group">
              <label className="form-label">
                <b>Player Name</b>
              </label>
              <p className="form-description">{character.name}</p>
            </div>
            <div className="form-group">
              <label className="form-label">
                <b>Health Points (HP)</b>
              </label>
              <p className="form-description">{character.hp}</p>
            </div>
          </form>
        </li>
      </ul>
    </div>
  );
}

export default CharacterInfo;
