import React, { Component } from 'react'

class Stats extends Component {
  static propTypes = {
    players: React.PropTypes.array.isRequired
  }
  render () {
    const { players } = this.props
    const totalPlayers = players.length
    const totalScore = players.reduce((total, curr) => {
      return total + curr.score
    }, 0)
    return (
      <table className='stats'>
        <tbody>
          <tr>
            <td>PLAYERS</td>
            <td>{totalPlayers}</td>
          </tr>
          <tr>
            <td>TOTAL POINTS</td>
            <td>{totalScore}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Stats
