function GameMaster() {
  const mode = "fallout";
  return (
    <>
      <button
        className="btn btn-primary mb-2"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
        aria-controls="offcanvasTop"
      >
        Game Master Tools
      </button>

      <div
        className="offcanvas offcanvas-top"
        tabIndex={-1}
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header">
          <h5
            className="offcanvas-title w-100 text-center"
            id="offcanvasTopLabel"
          >
            Game Master Tools
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body row">
          <div className="col d-flex flex-column align-items-center">
            <button
              className="btn btn-primary mb-2"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdropAddPlayer"
            >
              Add Player
            </button>
            <button
              className="btn btn-primary mb-2"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdropModifyPlayerStats"
            >
              Modify Player Stats
            </button>
          </div>
          <div className="col d-flex flex-column align-items-center">
            <button
              className="btn btn-primary mb-2"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdropAddItem"
            >
              Add Item
            </button>
            <button
              className="btn btn-primary mb-2"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdropModifyItemPlayer"
            >
              Modify Item
            </button>
          </div>
          <div className="col d-flex flex-column align-items-center">
            <button
              className="btn btn-primary mb-2"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdropChangeGameStatus"
            >
              Change Game Status
            </button>
          </div>
          <div className="col d-flex flex-column align-items-center">
            <button
              className="btn btn-primary mb-2"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdropAddSkill"
            >
              Add Skill
            </button>
            <button
              className="btn btn-primary mb-2"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdropModifySkillPlayer"
            >
              Modify Skill
            </button>
          </div>
          <div className="col d-flex flex-column align-items-center">
            <button
              className="btn btn-primary mb-2"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdropAddHistory"
            >
              Add History
            </button>
            <button
              className="btn btn-primary mb-2"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdropModifyHistory"
            >
              Modify History
            </button>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="staticBackdropAddPlayer"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Add Player
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <input
                  type="text"
                  className="form-control"
                  id="inputUsername"
                />
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="staticBackdropModifyPlayerStats"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Modify player stats
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <select className="form-select">
                  <option value="1" selected>
                    Player 1
                  </option>
                  <option value="2">Player 2</option>
                  <option value="3">Player 3</option>
                </select>
                {mode == "fallout" ? (
                  <>
                    <div className="input-group">
                      <span className="input-group-text">S</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">P</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">E</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">C</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">I</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">A</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">L</span>
                      <input type="number" className="form-control"></input>
                    </div>
                  </>
                ) : null}
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="staticBackdropAddItem"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Add Item
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <label htmlFor="ItemName" className="form-label">
                  Item Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="ItemName"
                ></input>
                <select className="form-select">
                  <option value="1" selected>
                    Player 1
                  </option>
                  <option value="2">Player 2</option>
                  <option value="3">Player 3</option>
                </select>
                {mode == "fallout" ? (
                  <>
                    <div className="input-group">
                      <span className="input-group-text">S</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">P</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">E</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">C</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">I</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">A</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">L</span>
                      <input type="number" className="form-control"></input>
                    </div>
                  </>
                ) : null}
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="staticBackdropModifyItemPlayer"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Choose Player
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <select className="form-select">
                  <option value="1" selected>
                    Player 1
                  </option>
                  <option value="2">Player 2</option>
                  <option value="3">Player 3</option>
                </select>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdropModifyItem"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="staticBackdropModifyItem"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Change Item
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <label htmlFor="ItemName" className="form-label">
                  Item Name:
                </label>

                <select className="form-select">
                  <option value="1" selected>
                    Item 1
                  </option>
                  <option value="2">Item 2</option>
                  <option value="3">Item 3</option>
                </select>
                {mode == "fallout" ? (
                  <>
                    <div className="input-group">
                      <span className="input-group-text">S</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">P</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">E</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">C</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">I</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">A</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">L</span>
                      <input type="number" className="form-control"></input>
                    </div>
                  </>
                ) : null}
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="staticBackdropChangeGameStatus"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Change Game Status
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Are You sure You want to change game status?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="staticBackdropAddSkill"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Add Skill
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <label htmlFor="ItemName" className="form-label">
                  Player Name:
                </label>

                <select className="form-select">
                  <option value="1" selected>
                    Player 1
                  </option>
                  <option value="2">Player 2</option>
                  <option value="3">Player 3</option>
                </select>
                <label htmlFor="name" className="form-label">
                  Name:
                </label>
                <input id="name" type="text" className="form-control"></input>
                <label htmlFor="description" className="form-label">
                  Description:
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows={8}
                ></textarea>
                {mode == "fallout" ? (
                  <>
                    <div className="input-group">
                      <span className="input-group-text">S</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">P</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">E</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">C</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">I</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">A</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">L</span>
                      <input type="number" className="form-control"></input>
                    </div>
                  </>
                ) : null}
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="staticBackdropModifySkillPlayer"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Choose Player
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <select className="form-select">
                  <option value="1" selected>
                    Player 1
                  </option>
                  <option value="2">Player 2</option>
                  <option value="3">Player 3</option>
                </select>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdropModifySkill"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="staticBackdropModifySkill"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Modify Skill
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <label htmlFor="ItemName" className="form-label">
                  Skill Name:
                </label>

                <select className="form-select">
                  <option value="1" selected>
                    Skill 1
                  </option>
                  <option value="2">Skill 2</option>
                  <option value="3">Skill 3</option>
                </select>
                <label htmlFor="description" className="form-label">
                  Description:
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows={8}
                ></textarea>
                {mode == "fallout" ? (
                  <>
                    <div className="input-group">
                      <span className="input-group-text">S</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">P</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">E</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">C</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">I</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">A</span>
                      <input type="number" className="form-control"></input>
                    </div>
                    <div className="input-group">
                      <span className="input-group-text">L</span>
                      <input type="number" className="form-control"></input>
                    </div>
                  </>
                ) : null}
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="staticBackdropAddHistory"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <form>
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Add History
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="HistoryId" className="form-label">
                    History:
                  </label>
                  <textarea
                    className="form-control"
                    id="HistoryId"
                    rows={20}
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Accept
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div
        className="modal fade"
        id="staticBackdropModifyHistory"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <form>
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">
                  Modify History
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label htmlFor="ItemName" className="form-label">
                    History Number:
                  </label>

                  <select className="form-select">
                    <option value="1" selected>
                      1
                    </option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                  <label htmlFor="HistoryId" className="form-label">
                    History:
                  </label>
                  <textarea
                    className="form-control"
                    id="HistoryId"
                    rows={20}
                  ></textarea>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Accept
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default GameMaster;
