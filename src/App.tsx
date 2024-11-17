import LoginPage from "./components/LoginPage";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  if (false) {
    return <div></div>; //for future
  } else {
    return <LoginPage />;
  }
}

export default App;
