import React from "react";

type StatType = "D&D" | "S.P.E.C.I.A.L" | "GURPS";

const statTemplates: Record<StatType, string[]> = {
  "D&D": ["Strength", "Agility", "Constitution", "Intelligence", "Wisdom", "Charisma"],
  "S.P.E.C.I.A.L": ["Strength", "Perception", "Endurance", "Charisma", "Intelligence", "Agility", "Luck"],
  "GURPS": ["Strength", "Agility", "Intelligence", "Health"],
};

interface StatsListProps {
  statsType: StatType;
}

const StatsList: React.FC<StatsListProps> = ({ statsType }) => {
  const stats = statTemplates[statsType];

  const generateRandomValue = () => Math.floor(Math.random() * 25) + 1;

  return (
    <ol>
      {stats.map((stat) => (
        <li key={stat}>
          {stat}: {generateRandomValue()}
        </li>
      ))}
    </ol>
  );
};

export default StatsList;
