import Instructions from "../Instructions/Instructions";
import LogoutButton from "../LogoutButton/LogoutButton";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Data</h1>
        <LogoutButton />
      </header>
      <main>
        <Instructions />
        {/* Insert your code below this line */}
      </main>
    </div>
  );
}

export default App;
