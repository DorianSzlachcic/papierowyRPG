import { useState } from "react";
import LoginPage from "./components/LoginPage";

function App() {
  const [logged, setLogged] = useState(false);

  const handleSetLogged = (current: boolean) => {
    setLogged(current);
  };
  //check for session cookie and if we find it set propper account and logged to true
  if (logged) {
    return <div>happened</div>;
  } else {
    return <LoginPage handleSetLogged={handleSetLogged} />;
  }
}

export default App;
