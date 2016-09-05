import React, { Component } from 'react'
import Counter from './Counter'

class Player extends Component {
  render () {
    const { name, score } = this.props
    return (
      <div className='player'>
        <div className='player-name'>
        {name}
        </div>
        <div className='player-score'>
          <Counter score={score} onChange={this.props.onScoreChange} />
        </div>
      </div>
    )
  }
}
Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
  onScoreChange: React.PropTypes.func.isRequired
}
export default Player
