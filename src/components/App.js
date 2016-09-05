import React, { Component } from 'react'
import Header from './Header'
import Player from './Player'

class App extends Component {
  render () {
    const { title, players } = this.props
    return (
      <div className='scoreboard'>
        <Header title={title} />
        <div className='players'>
        {players.map(player => <Player name={player.name} score={player.score} key={player.name} />)}
        </div>
      </div>
    )
  }
}
App.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired
  })).isRequired
}

export default App
