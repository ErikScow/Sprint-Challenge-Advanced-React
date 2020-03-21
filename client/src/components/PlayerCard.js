import React from 'react'

const PlayerCard = props => {
    const player = props.player
    return (
        <div className='player-card'>
            <h3>{player.name}</h3>
            <h4>{player.country}</h4>
        </div>
    )
}

export default PlayerCard