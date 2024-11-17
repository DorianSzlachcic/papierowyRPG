import { useState } from "react";
import SignUpPage from "./components/SignUpPage";

function SignApp() {
  const [logged, setLogged] = useState(false);

  const handleSetLogged = (current: boolean) => {
    setLogged(current);
  };

  return <SignUpPage />;
}

export default SignApp;
