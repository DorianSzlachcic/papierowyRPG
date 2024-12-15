import GameList from "./GameList";
import NewGameButton from "./NewGameButton";
import Player from "./Player";

function MainPage() {

  
  

  return (
    <>
      <GameList/>
      <NewGameButton/>

      <button
        className="btn btn-danger"
        onClick={() => {
          const deleteCookie = (name: string) => {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
          };

          deleteCookie("usernameForPapierowyRPG");
        }}
      >
        Log out
      </button>

      <a href="/game">gra</a>
    </>
  );
}

export default MainPage;
