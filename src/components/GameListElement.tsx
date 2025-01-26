function GameListElement(props: { id: number, name: string, numberOfPlayers: number, status: boolean, statsType: string }) {

    const backgroundClass = props.status ? "bg-success-subtle" : "bg-dark-subtle";
    const textMutedClass = props.status ? "" : "text-muted";
    const borderClass = "border border-dark";

    const setGameId = () => {
        const setCookie = (name: string, id: number, days: number) => {
            const expirationDate = new Date();
            expirationDate.setDate(expirationDate.getDate() + days);

            document.cookie = `${name}=${id}; expires=${expirationDate.toUTCString()}; path=/game`;
        };
        setCookie("gameIdForPapierowyRPG", props.id, 1);
    }
    
    return (
        <>
            <li className={`list-group-item d-flex justify-content-between align-items-start ${backgroundClass} ${textMutedClass} ${borderClass}`}>
                <div className="ms-2 me-auto">
                    <div className="fw-bold">{props.name}</div>
                    <p>Number of players: {props.numberOfPlayers}</p>
                    <p>Status: {props.status ? "ONLINE" : "OFFLINE"}</p>
                    <p>Rule set: {props.statsType}</p>
                </div>
                
                <a
                    href="/game"
                    className="btn btn-primary ms-3 border border-dark bg-light-subtle text-dark"
                    style={{ fontSize: "1.0rem" }}
                    onClick={setGameId}
                    >
                    {"Join"}
                </a>
                
            </li>
        </>
    );
}

export default GameListElement;
