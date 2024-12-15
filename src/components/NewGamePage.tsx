import React, { useState } from "react";

interface Props {
  handleAlert: () => void;
}

function SignUpPage({ handleAlert }: Props) {
  const [name, setGameName] = useState("");
  const [ruleSet, setRuleSet] = useState("D&D");
  const [players, setPlayers] = useState<string[]>([""]);

  const handleAddPlayer = () => {
    setPlayers([...players, ""]);
  };

  const handlePlayerChange = (index: number, value: string) => {
    const updatedPlayers = [...players];
    updatedPlayers[index] = value;
    setPlayers(updatedPlayers);
  };


  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("ruleSet", ruleSet);
    formData.append("players", JSON.stringify(players));


    try {
      fetch("https://localhost:7016/api/games", {
        method: "POST",
        body: formData,
      }).then((res) => {
        if (res.status == 200) {
          handleAlert();
        } else {
          console.log(res.status);
        }
      });
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
                  <option value="S.P.E.C.I.A.L">S.P.E.C.I.A.L</option>
                  <option value="GURPS">GURPS</option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Players:</label>
                {players.map((player, index) => (
                  <div key={index} className="input-group mb-2">
                    <input
                      type="text"
                      className="form-control"
                      placeholder={`Player ${index + 1} Name`}
                      value={player}
                      onChange={(e) => handlePlayerChange(index, e.target.value)}
                    />
                  </div>
                ))}
                <button
                  type="button"
                  className="btn btn-secondary mt-2"
                  onClick={handleAddPlayer}
                >
                  + Add Player
                </button>
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
