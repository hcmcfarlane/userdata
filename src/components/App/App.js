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
        <h2 style={{ marginBottom: "2rem" }}>Add your code below here</h2>
        {/* Insert your code below this line and above the Instructions */}

        <Instructions />
      </main>
    </div>
  );
}

export default App;
