import React, { useState } from "react";

interface Props {
  handleAlert: () => void;
}

function SignUpPage({ handleAlert }: Props) {
  const [name, setGameName] = useState("");
  const [ruleSet, setRuleSet] = useState("D&D");
  const [players, setPlayers] = useState(["", "", "", "",""]);


  const handlePlayerChange = (index: number, value: string) => {
    const updatedPlayers = [...players];
    updatedPlayers[index] = value;
    setPlayers(updatedPlayers);
  };

  const getCookie = (name: string) => {
    const cookies = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${name}=`));
  
    return cookies ? cookies.split("=")[1] : null;
  };
  const username = getCookie("usernameForPapierowyRPG") ?? "";


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
  
    const formData = new FormData();
    formData.append("name", name);
    formData.append("ruleset", ruleSet);
    formData.append("player1", players[0]);
    formData.append("player2", players[1]);
    formData.append("player3", players[2]);
    formData.append("player4", players[3]);
    formData.append("gameMaster", username);

    try {
      const res = await fetch("https://localhost:7016/api/games/add", {
        method: "POST",
        body: formData,
      });
      if (res.status === 200) {
        handleAlert();
      } else {
        console.log(res.status);
        const errorDetails = await res.text();
        console.log("Error details:", errorDetails);
      }
    } catch (error) {
      console.error("Błąd połączenia z API:", error);
    }
  };

  return (
    <div>
      <div className="container min-vh-100 w-50 d-flex justify-content-center align-items-center">
        <div
          className="card form-card shadow"
          style={{
            width: "29%",
            border: "4px solid #ccc",
            borderRadius: "15px",
          }}
        >
          <form onSubmit={handleSubmit}>
            <div className="text-center card-header">
              <h2>New Game</h2>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="inputUsername" className="form-label">
                  Game Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputUsername"
                  value={name}
                  onChange={(e) => setGameName(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="ruleSetSelect" className="form-label">
                  Select Rule Set:
                </label>
                <select
                  className="form-select"
                  id="ruleSetSelect"
                  value={ruleSet}
                  onChange={(e) => setRuleSet(e.target.value)}
                >
                  <option value="D&D">D&D</option>
                  <option value="SPECIAL">SPECIAL</option>
                  <option value="GURPS">GURPS</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Players:</label>
                <div>
                  <div className="input-group mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Player 1 Name"
                      value={players[0] || ""}
                      onChange={(e) => handlePlayerChange(0, e.target.value)}
                    />
                  </div>
                  <div className="input-group mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Player 2 Name"
                      value={players[1] || ""}
                      onChange={(e) => handlePlayerChange(1, e.target.value)}
                    />
                  </div>
                  <div className="input-group mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Player 3 Name"
                      value={players[2] || ""}
                      onChange={(e) => handlePlayerChange(2, e.target.value)}
                    />
                  </div>
                  <div className="input-group mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Player 4 Name"
                      value={players[3] || ""}
                      onChange={(e) => handlePlayerChange(3, e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-row">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <a
                href="/index"
                className="btn btn-secondary m-2 border border-dark"
                style={{ fontSize: "1.0rem" }}
                >
                  Cancel
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
