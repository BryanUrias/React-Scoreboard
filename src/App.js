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


  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return{
        players: prevState.players.filter( player => player.id !== id )
      }
    
    })
  }

  render() {
    return (
      <div className="scoreboard">
        <Header
          title="My Scoreboard"
          totalPlayers={this.state.players.length}
        />

        {this.state.players.map (player => (
          <Player name={player.name} id={player.id} key={player.id.toString()} removePlayer={this.handleRemovePlayer} />
        ))}
      </div>
    );
  }
}

export default App;
