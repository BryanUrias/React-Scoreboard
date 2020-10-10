import React from "react";
import "./App.css";
import Header from "./components/header";
import Player from "./components/player";

class App extends React.Component {

  state ={
    players: [{
      name: "Guil",
      
      id: 1
    },
    {
      name: "Treasure",
     
      id: 2
    },
    {
      name: "Ashley",
     
      id: 3
    },
    {
      name: "James",
      
      id: 4
    }]
  }

  render() {
    return (
      <div className="scoreboard">
        <Header
          title="My Scoreboard"
          totalPlayers={this.state.players.length}
        />

        {this.state.players.map (player => (
          <Player name={player.name} key={player.id.toString()} />
        ))}
      </div>
    );
  }
}

export default App;
