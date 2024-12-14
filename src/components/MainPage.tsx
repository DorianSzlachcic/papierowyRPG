import GameList from "./GameList";
import NewGameButton from "./NewGameButton";

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
    </>
    );
  
}

export default MainPage;
