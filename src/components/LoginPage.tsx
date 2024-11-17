import React, { useState } from "react";

function LoginPage() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <div>
      <div className="container min-vh-100 d-flex justify-content-center align-items-center">
        <form>
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
                  type="nickname"
                  className="form-control "
                  id="inputNickname"
                  aria-describedby="nicknameHelp"
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
