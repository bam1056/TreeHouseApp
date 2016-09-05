import React, { Component } from 'react'
import Header from './Header'
import Player from './Player'
import players from './players.json'

class App extends Component {
  constructor () {
    super()
    this.state = {
      score: players.players.score,
      initialPlayers: players.players,
      title: 'Scoreboard'
    }
  }

  onScoreChange = (index, delta) => {
    console.log(index, delta)
  }

  render () {
    const { title, initialPlayers } = this.state
    return (
      <div className='scoreboard'>
        <Header title={title} />
        <div className='players'>
        {initialPlayers.map((player, index) =>
          <Player
            onScoreChange={function(delta) { this.onScoreChange(index, delta)}.bind(this)}
            name={player.name}
            score={player.score}
            key={player.name} />)}
        </div>
      </div>
    )
  }
}

export default App
