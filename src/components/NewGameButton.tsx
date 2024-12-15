function NewGameButton() {
    return (
        <div>
            <a
                href="/newgame"
                className="btn btn-primary m-2 border border-dark"
                style={{ fontSize: "1.5rem" }}
            >
                Create New Game
            </a>
        </div>
    );
}

export default NewGameButton;
