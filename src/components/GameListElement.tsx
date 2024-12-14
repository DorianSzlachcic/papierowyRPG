function GameListElement(props: { id: number, name: string, numberOfPlayers: number, status: boolean }) {

    const backgroundClass = props.status ? "bg-success-subtle" : "bg-danger-subtle";
    const textMutedClass = props.status ? "" : "text-muted";
    const borderClass = "border border-dark";

    return (
        <>
            <li className={`list-group-item d-flex justify-content-between align-items-start ${backgroundClass} ${textMutedClass} ${borderClass}`}>
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{props.name}</div>
                    <p>Number of players: {props.numberOfPlayers}</p>
                    <p>Status: {props.status ? "AKTYWNA" : "ZAKOŃCZONA"}</p>
                </div>
                <button className="btn btn-primary ms-3 border border-dark bg-light-subtle text-dark" style={{ fontSize: "1.0rem" }}>
                    {props.status ? "->" : "X"}
                </button>
            </li>
        </>
    );
}

export default GameListElement;
