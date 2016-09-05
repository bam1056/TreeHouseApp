import React, { Component } from 'react'
import Header from './Header'
import Player from './Player'
import players from './players.json'

class App extends Component {
  constructor () {
    super()
    this.state = {
      score: players.players.score,
      players: players.players,
      title: 'Scoreboard'
    }
  }

  onScoreChange = (index, delta) => {
    this.state.players[index].score += delta
    this.setState(this.state)
  }

  render () {
    const { title, players } = this.state
    return (
      <div className='scoreboard'>
        <Header title={title} players={players} />
        <div className='players'>
        {players.map((player, index) =>
          <Player
            onScoreChange={(delta) => { this.onScoreChange(index, delta)}}
            name={player.name}
            score={player.score}
            key={player.name} />)}
        </div>
      </div>
    )
  }
}

export default App
