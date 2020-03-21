import React from 'react'
import axios from 'axios'

import PlayerCard from './PlayerCard'

class Players extends React.Component {
    constructor() {
        super()
        this.state = {
            players: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/players')
            .then(res => {
                this.setState({players: res.data})
                console.log('Players Data: ', this.state.players)
            })
        
    }

    render() {
        return (
            <div className='players'>
                {this.state.players.map((player, i) => {
                    return(
                        <PlayerCard key={i} player={player}/>
                    )
                })}
            </div>
        )
    }
}

export default Players