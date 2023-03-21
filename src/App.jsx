import "./App.css";
import { Butchers } from "./Butchers.jsx";
import { useState } from "react";

function Header() {
  return (
    <>
      <h1>What's Beef?</h1>
      <h2>Halal butchers on the go!</h2>
    </>
  );
}

/**
 *
 * @type {{meats: array}}
 */
function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Header />
      <Butchers count={count} onClick={handleClick} />
      <Butchers count={count} onClick={handleClick} />
    </div>
  );
}

export default App;
