import Instructions from "../Instructions/Instructions";
import LogoutButton from "../LogoutButton/LogoutButton";
import Card from "../Card/Card";
import "./App.css";
import data from "../../libs/user_data.json";

function App() {
  // const { colour, image, name, ranking } = data[0];

  return (
    <div className="App">
      <header className="App-header">
        <h1>User Data</h1>
        <LogoutButton />
      </header>
      <main>
        <Instructions />
        {/* Insert your code below this line */}
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
        {/* <Card colour={colour} image={image} name={name} ranking={ranking} /> */}
      </main>
    </div>
  );
}

export default App;
