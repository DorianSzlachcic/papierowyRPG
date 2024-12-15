import React, { useState } from "react";
import GameListElement from "./GameListElement";

export type StatType = "D&D" | "S.P.E.C.I.A.L" | "GURPS";

interface GameList {
    id: number;
    name: string;
    numberOfPlayers: number;
    status: boolean;
    statsType: StatType;
  }
  
const testData: GameList[] = [
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
    statsType: "S.P.E.C.I.A.L",
  },
  {
    id: 5,
    name: "Moonlit Bloodlines",
    numberOfPlayers: 2,
    status: true,
    statsType: "GURPS",
  },
];

function GameList() {
    const [gameListData, setGameListaData] = useState();

    try {
        fetch("https://localhost:7016/api/games", {
            method: "GET",
        }).then(async (res) => {
            if(res.status == 200){
                setGameListaData(await res.json()) 
            } else {
                console.log(res.status);
            }
        });
    } catch (error) {
        console.error("Błąd połączenia z API", error);
    }

    return (
        <ol className="list-group list-group-numbered m-2">
            {testData.map((testData) => (
                <GameListElement key={testData.id} id={testData.id} name={testData.name} numberOfPlayers={testData.numberOfPlayers} status={testData.status} statsType={testData.statsType}/>
            ))}
        </ol>
    )
}

export default GameList;