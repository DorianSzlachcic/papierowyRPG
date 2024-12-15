import { useState } from "react";
import "./styles.css";

// Zdefiniujmy interfejs dla umiejętności
interface Skill {
  id: number;
  name: string;
  description: string;
}

function Skills() {
  const gameMode: string = "Medieval"; // Fallout/Medieval

  const falloutSkills: Skill[] = [
    {
      id: 1,
      name: "Gun Combat",
      description:
        "Mastery of firearms, increases damage and accuracy with guns.",
    },
    {
      id: 2,
      name: "Survival",
      description:
        "Expertise in scavenging, increases resource gathering and crafting.",
    },
    {
      id: 3,
      name: "Science",
      description:
        "Knowledge of technology, increases hacking and crafting abilities.",
    },
  ];

  const medievalSkills: Skill[] = [
    {
      id: 1,
      name: "Sword Fighting",
      description:
        "Mastery of close combat with swords, improves damage and defense.",
    },
    {
      id: 2,
      name: "Archery",
      description: "Skill with the bow, increases accuracy and range.",
    },
    {
      id: 3,
      name: "Alchemy",
      description:
        "Expert in creating potions and elixirs, enhances health and magic.",
    },
  ];

  // Wybór umiejętności zależnie od trybu gry
  const skills = gameMode === "Fallout" ? falloutSkills : medievalSkills;

  return (
    <div className="card">
      <h2 className="card-header">Skills</h2>
      <p>Current Game Mode: {gameMode}</p>
      <ul className="list-group">
        {skills.map((skill) => (
          <li key={skill.id} className="list-group-item">
            <h4>{skill.name}</h4>
            <p>{skill.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
