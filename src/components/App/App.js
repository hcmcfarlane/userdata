import Instructions from "../Instructions/Instructions";
import LogoutButton from "../LogoutButton/LogoutButton";
import Card from "../Card/Card";
import "./App.css";
import data from "../../libs/user_data.json";

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

        <div className="user-list">
          {data.map((user) => (
            <Card
              colour={user.colour}
              image={user.image}
              name={user.name}
              ranking={user.ranking}
              key={user.id}
            />
          ))}
        </div>
        {/* OR: Destructure the user data as
        const { colour, image, name, ranking } = user;
        THEN
        <Card colour={colour} image={image} name={name} ranking={ranking} key={id} /> */}

        <Instructions />
      </main>
    </div>
  );
}

export default App;
