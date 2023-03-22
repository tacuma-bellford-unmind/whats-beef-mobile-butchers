import "./App.css";
import { ButchersList } from "./ButchersList.jsx";

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
  return (
    <div className="App">
      <Header />
      <ButchersList />
    </div>
  );
}

export default App;
