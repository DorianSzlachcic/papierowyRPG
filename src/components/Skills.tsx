import { useState } from "react";
import "./styles.css";

interface Skill {
  id: number;
  name: string;
  level: number;
}

function Skills() {
  const [skills, setSkills] = useState<Skill[]>([
    { id: 1, name: "SwordFighting", level: 3 },
    { id: 2, name: "Archery", level: 2 },
    { id: 3, name: "Alchemy", level: 5 },
  ]);

  {
    /*const handleUpgrade = (id: number) => {
    const updatedSkills = skills.map((skill) =>
      skill.id === id ? { ...skill, level: skill.level + 1 } : skill
    );
    setSkills(updatedSkills);
    handleSkillUpgrade(id);
  };*/
  }

  return (
    <div className="card">
      <h2 className="card-header">Skills</h2>
      <ul className="list-group">
        {skills.map((skill) => (
          <li key={skill.id} className="list-group-item">
            <span>
              {skill.name} (Level: {skill.level})
            </span>
            {/*<button
              className="btn btn-primary"
              onClick={() => handleUpgrade(skill.id)}
            >
              Upgrade
            </button>*/}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
