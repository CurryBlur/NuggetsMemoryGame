import '../styles/PlayerCard.css';
import getPlayerPicture from '../api/get-player-picture.js'
import { useEffect, useState } from 'react';

const PlayerCard = ({last, first, playerClicked}) => {
    const [playerImage, setPlayerImage] = useState("loading");

    useEffect(() => {
        getPlayerPicture(last,first).then((url) => {
            setPlayerImage(url);
        });
    },[last, first])

    const clickFunction = () => {
        playerClicked(last + first);
    }

    return (
        <div className="card" onClick={clickFunction}>
            <img src={playerImage} alt={first + ' ' + last}></img>
            <div className="cardName">
                <h2>{first + " " + last}</h2>
            </div>
        </div>
    )
}

export default PlayerCard;