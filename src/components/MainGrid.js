import '../styles/MainGrid.css';
import PlayerCard from './PlayerCard.js'

const MainGrid = ({playerList, playerClicked}) => {
    return (
        <div className="mainGrid">
            {playerList.map((player) => {
                return <PlayerCard playerClicked={playerClicked} last={player.last} first={player.first} key={player.first + player.last}/>
            })}
        </div>
    )
}

export default MainGrid;