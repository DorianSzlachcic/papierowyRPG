import { useState } from "react";
import LoginPage from "./components/LoginPage";
import Alert from "./components/Alert";

function App() {
  const [logged, setLogged] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);

  const handleSetLogged = (current: boolean) => {
    setLogged(current);
    setAlertVisible(true);
  };

  //check for session cookie and if we find it set propper account and logged to true
  if (logged) {
    return alertVisible ? (
      <>
        <Alert
          text="Succesfully logged."
          type="success"
          onClose={() => setAlertVisible(false)}
        />
        <div>Page for logged customers</div>
      </>
    ) : (
      <div>Page for logged customers</div>
    );
  } else {
    return alertVisible ? (
      <>
        <Alert
          text="Wrong credentials!"
          type="danger"
          onClose={() => setAlertVisible(false)}
        />
        <LoginPage handleSetLogged={handleSetLogged} />
      </>
    ) : (
      <LoginPage handleSetLogged={handleSetLogged} />
    );
  }
}

export default App;
