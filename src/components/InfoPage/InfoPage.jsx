import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useState } from 'react';


// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [threeMade, setThreeMade]= useState(0)
  const [threeMissed, setThreeMissed] = useState(0)
  const [twoMade, setTwoMade] = useState(0)
  const [twoMiss, setTwoMiss] = useState(0)
  const [rebounds, setRebounds] = useState(0)
  const [assists, setAssists] = useState(0)
  const [blocks, setBlocks] = useState(0)
  const [steals, setSteals] = useState(0)
  const [commentInput, setCommentInput] = useState('')



  const [playerName, setPlayerName]= useState('')
  
  const playerReducer = useSelector((store) => store.playerReducer)

  const onMadeThree = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SET_THREE_MADE',
      payload: threeMade
    })
  }
  const onMissedThree = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SET_THREE_MISSED',
      payload: threeMissed
    })
  }
  const onMadeTwo = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SET_TWO_MADE',
      payload: twoMade
    })
  }
  const onMissedTwo = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SET_TWO_MISS',
      payload: twoMiss
    })
  }
  const onRebound = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SET_REBOUNDS',
      payload: rebounds
    })
  }
  const onAssists = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SET_ASSISTS',
      payload: assists
    })
  }
  const onBlock = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SET_BLOCKS',
      payload: blocks
    })
  }
  const onSteal = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SET_STEALS',
      payload: steals
    })
  }

  

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Players</th>
              <th>3pt Made</th>
              <th>3pt Missed</th>
              <th>2pt Made</th>
              <th>2pt Missed</th>
              <th>Reb</th>
              <th>Ast</th>
              <th>Blks</th>
              <th>Stl</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {playerReducer.map((player) => {
                return <tr key={player.id}> {player.player_name}</tr>
              })}
              <td><button onClick={onMadeThree}>Made</button></td>
              <td><button onClick={onMissedThree}>Missed</button></td>
              <td><button onClick={onMadeTwo}>Made</button></td>
              <td><button onClick={onMissedTwo}>Missed</button></td>
              <td><button onClick={onRebound}>Add Reb</button></td>
              <td><button onClick={onAssists}>Add Ast</button></td>
              <td><button onClick={onBlock}>Add Blk</button></td>
              <td><button onClick={onSteal}>Add Stl</button></td>
            </tr>
          </tbody>
        </table>
        <div>
          <textarea
            value={commentInput}
            type='text'
            onChange={(event) => {setCommentInput(event.target.value) }}
            placeholder="Comments about the game"
          />
          <button>Submit the Game</button>
        </div>
      </div>
  );
}
export default InfoPage;
