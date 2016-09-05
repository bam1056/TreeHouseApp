import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import players from './components/players.json'
import './styles/screen.sass'

render(<App players={players.players} title='Scoreboard' />, document.getElementById('root'))
