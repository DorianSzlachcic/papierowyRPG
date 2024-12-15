import { useState } from "react";
import Skills from "./components/Skills";
import Items from "./components/Items";
import "./components/styles.css";
interface PlayerStats {
  health: number;
  mana: number;
  level: number;
  experience: number;
}

function PlayerPage() {
  const [stats] = useState<PlayerStats>({
    health: 100,
    mana: 50,
    level: 1,
    experience: 0,
  });

  const handleSkillUpgrade = (id: number) => {
    console.log(`Skill with ID ${id} upgraded!`);
  };

  const handleItemUse = (id: number) => {
    console.log(`Item with ID ${id} used!`);
  };

  return (
    <div className="container">
      <h1 className="text-center">Player Page</h1>

      <div className="card mb-4">
        <h2 className="card-header">Player Stats</h2>
        <div className="card-body">
          <p>Health: {stats.health}</p>
          <p>Mana: {stats.mana}</p>
          <p>Level: {stats.level}</p>
          <p>Experience: {stats.experience}</p>
        </div>
      </div>

      <div className="mb-4">
        <Skills handleSkillUpgrade={handleSkillUpgrade} />
      </div>

      <div className="mb-4">
        <Items handleItemUse={handleItemUse} />
      </div>

      <div className="card">
        <h2 className="card-header">Player Inventory</h2>
        <div className="card-body">
          <p>(Placeholder for future inventory management)</p>
        </div>
      </div>
    </div>
  );
}

export default PlayerPage;
