import { useState } from "react";
import "./styles.css";

// Zdefiniowanie interfejsu dla postaci
interface Character {
  id: number;
  name: string;
  hp: number;
}

function CharacterInfo() {
  const [characters, setCharacters] = useState<Character[]>([
    { id: 1, name: "Hero", hp: 100 },
    { id: 2, name: "Warrior", hp: 150 },
    { id: 3, name: "Mage", hp: 80 },
  ]);

  return (
    <div className="card" style={{ height: "400px" }}>
      <h2 className="card-header">Character Info</h2>
      <div
        className="card-body"
        style={{ maxHeight: "calc(100vh - 180px)", overflowY: "auto" }}
      >
        <ul className="list-group">
          {characters.map((character) => (
            <li key={character.id} className="list-group-item">
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
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CharacterInfo;
