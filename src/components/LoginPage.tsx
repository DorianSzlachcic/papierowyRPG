import React, { useState } from "react";

interface Props {
  handleSetLogged: (current: boolean) => void;
}

function LoginPage({ handleSetLogged }: Props) {
  const [isChecked, setIsChecked] = useState(false);
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); // Zapobiega przeładowaniu strony

    const loginData = {
      nickname,
      password,
    };

    try {
      const response = fetch("space for api url for checking user data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      })
        .then((res) => res.json())
        .then((json) => {
          //if()
        });
    } catch (error) {
      console.error("Błąd połączenia z API:", error);
    }
  };

  return (
    <div>
      <div className="container min-vh-100 w-50 d-flex justify-content-center align-items-center">
        <form onSubmit={handleSubmit}>
          <div className="card">
            <div className="text-center card-header">
              <h2>Log in</h2>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label htmlFor="inputNickname" className="form-label">
                  Nickname
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputNickname"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type={isChecked ? "text" : "password"}
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="showPassword"
                  checked={isChecked}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="showPassword">
                  Show password
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <div className="card-footer text-body-secondary">
              <p>
                First timer? <a href="/signup">Sign up!</a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
