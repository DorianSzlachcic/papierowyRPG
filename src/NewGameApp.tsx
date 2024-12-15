import { useState } from "react";
import NewGamePage from "./components/NewGamePage";
import Alert from "./components/Alert";

function NewGameApp() {
  const [alertVisible, setAlertVisible] = useState(false);

  return alertVisible ? (
    <>
      <Alert
        text="Game created."
        type="success"
        onClose={() => setAlertVisible(false)}
      />
      <NewGamePage handleAlert={() => setAlertVisible(true)} />
    </>
  ) : (
    <>
      <NewGamePage handleAlert={() => setAlertVisible(true)} />
    </>
  );
}

export default NewGameApp;
