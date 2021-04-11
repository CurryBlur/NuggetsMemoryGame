import './App.css';
import getPlayerList from './api/player-list.js'
import { useEffect, useState } from 'react'
import MainGrid from './components/MainGrid';

function App() {
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [playerList, setPlayerList] = useState(getPlayerList());
  const [chosenPlayers, setChosenPlayers] = useState([]);

  useEffect(() => {
    //Make sure topScore is updated when score is updated
    if(score > topScore) {
      setTopScore(score);
    }
  })

  const resetScore = () => {
    setScore(0);
  }

  const addToScore = () => {
    setScore(score+1);
  }

  const shuffleList = () => {
    const newList = playerList;
    for (let i = newList.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newList[i], newList[j]] = [newList[j], newList[i]];
    }
    setPlayerList(newList);
  }

  const clearChosenPlayers = () => {
    setChosenPlayers([]);
  }

  const playerClicked = (player) => {
    console.log(chosenPlayers);
    if (chosenPlayers.includes(player)) {
      resetScore();
      clearChosenPlayers();
    } else {
      addToScore();
      setChosenPlayers([...chosenPlayers, player]);
    }
    shuffleList();
  }

  return (
    <div className="App">
      <header>
        <div className='left'>
          <h1>Nuggets Memory Test</h1>
        </div>
        <div className='right'>
          <h3>Test your memory by clicking on player images.  If you click an image you already clicked, you lose!</h3>
          <div className="divider"></div>
          <p>Current score: {score}</p><div className="divider"></div>
          <p>Top score: {topScore}</p>
        </div>
      </header>
      <MainGrid playerList={playerList} playerClicked={playerClicked}/>
      {/* <PlayerCard last="McGee" first="Javale"/>
      <PlayerCard last="Hernangomez" first="Juan"/> */}
    </div>
  );
}

export default App;
