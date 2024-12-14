import React, { useState } from "react";
import GameListElement from "./GameListElement";

interface GameList {
    id: number;
    name: string;
    numberOfPlayers: number;
    status: boolean
  }
  
  const testData: GameList[] = [
    {
      id: 1,
      name: "Ratowanie księżniczki",
      numberOfPlayers: 4,
      status: false,
    },
    {
      id: 2,
      name: "Dziecię Bala",
      numberOfPlayers: 6,
      status: true,
    },
    {
      id: 3,
      name: "Plaga w Neverwinter",
      numberOfPlayers: 3,
      status: true,
    },
    {
      id: 4,
      name: "Polowanie na Czarnego Smoka",
      numberOfPlayers: 5,
      status: false,
    },
    {
      id: 5,
      name: "Wampiry i Wilkołaki",
      numberOfPlayers: 2,
      status: true,
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
                <GameListElement key={testData.id} id={testData.id} name={testData.name} numberOfPlayers={testData.numberOfPlayers} status={testData.status}/>
            ))}
        </ol>
    )
}

export default GameList;