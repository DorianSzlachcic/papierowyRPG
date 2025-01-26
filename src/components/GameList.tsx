import React, { useState } from "react";
import GameListElement from "./GameListElement";

export type StatType = "D&D" | "SPECIAL" | "GURPS";

interface GameList {
    id: number;
    name: string;
    playerAmount: number;
    isActive: boolean;
    ruleset: StatType;
  }
  
/*const testData: GameList[] = [
  {
    id: 1,
    name: "Bloodlines in the Wastes",
    numberOfPlayers: 4,
    status: false,
    statsType: "GURPS",
  },
  {
    id: 2,
    name: "Ascension of the Fallen",
    numberOfPlayers: 6,
    status: true,
    statsType: "D&D",
  },
  {
    id: 3,
    name: "Echoes of the Plague",
    numberOfPlayers: 3,
    status: true,
    statsType: "D&D",
  },
  {
    id: 4,
    name: "Frozen Blades, Burning Hearts",
    numberOfPlayers: 5,
    status: false,
    statsType: "SPECIAL",
  },
  {
    id: 5,
    name: "Moonlit Bloodlines",
    numberOfPlayers: 2,
    status: true,
    statsType: "GURPS",
  },
];*/

function GameList() {
  const [gameListData, setGameListData] = useState<GameList[] | undefined>(undefined);

  const getCookie = (name: string) => {
    const cookies = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${name}=`));
  
    return cookies ? cookies.split("=")[1] : null;
  };

  const formData = new FormData();
  const username = getCookie("usernameForPapierowyRPG") ?? "";
  formData.append("username", username);

  try {
      fetch("https://localhost:7016/api/games", {
          method: "GET",
      }).then(async (res) => {
          if(res.status == 200){
              setGameListData(await res.json()) 
          } else {
              console.log(res.status);
          }
      });
  } catch (error) {
      console.error("Błąd połączenia z API", error);
  }

  return (
      <ol className="list-group list-group-numbered m-2">
        {(gameListData ?? []).map((testData) => (
          <GameListElement 
              key={testData.id} 
              id={testData.id} 
              name={testData.name} 
              numberOfPlayers={testData.playerAmount} 
              status={testData.isActive} 
              statsType={testData.ruleset} 
          />
      ))}

      </ol>
  )
}

export default GameList;