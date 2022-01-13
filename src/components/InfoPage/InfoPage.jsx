import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useState } from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import './InfoPage.css';


// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [threeMade, setThreeMade]=useState(0)
  const [threeMissed, setThreeMissed] = useState(0)
  const [twoMade, setTwoMade] = useState(0)
  const [twoMissed, setTwoMissed] = useState(0)
  const [rebounds, setRebounds] = useState(0)
  const [assists, setAssists] = useState(0)
  const [blocks, setBlocks] = useState(0)
  const [steals, setSteals] = useState(0)

  const [commentInput, setCommentInput] = useState('')
  const [dateInput, setDateInput] = useState('');
  const[courtId, setCourtID] = useState(0);

  // const [userId, setUserId] = useState('')

  // const user = useSelector((store) => store.user);
  const playerReducer = useSelector((store) => store.playerReducer)
  const courtReducer = useSelector((store) => store.courtReducer)
  const statsReducer = useSelector((store) => store.statsReducer)

  useEffect(() => {
    //Need to Get Courts and put it here
    dispatch({
      type: 'SAGA_FETCH_COURTS'
    })
  }, [])

  function chooseCourt(event) {
    event.preventDefault();
    setCourtID(event.target.value);
  };

  const onMadeThree = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SET_THREE_MADE',
    })
    setThreeMade(threeMade +1)
  }
  const onMissedThree = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SET_THREE_MISSED',
    })
    setThreeMissed(threeMissed + 1)
  }
  const onMadeTwo = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SET_TWO_MADE',
    })
    setTwoMade(twoMade + 1)
  }
  const onMissedTwo = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SET_TWO_MISS',
    })
    setTwoMissed(twoMissed + 1)
  }
  const onRebound = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SET_REBOUNDS',
    })
    setRebounds(rebounds + 1)
  }
  const onAssists = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SET_ASSISTS',
    })
    setAssists(assists + 1)
  }
  const onBlock = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SET_BLOCKS',
    })
    setBlocks(blocks + 1)
  }
  const onSteal = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SET_STEALS',
    })
    setSteals(steals + 1)
  }
  const handleSubmitGame = (e)=>{
    e.preventDefault();
    dispatch({
      type:'SAGA_ADD_GAME_STATS',
      payload:{
        // username_id: userId,
        playerName_id: playerReducer[0].id ,
        three_made: statsReducer.three_made,
        three_missed: statsReducer.three_missed,
        two_made: statsReducer.two_made,
        two_miss: statsReducer.two_miss,
        // total_points:,
        rebounds: statsReducer.rebounds,
        assists: statsReducer.assists,
        blocks: statsReducer.blocks,
        steals: statsReducer.steals,
        comments: commentInput,
        date: dateInput,
        court_id: courtId,
      }
    })
    history.push('/seeGameStats')
  }



    return (
      <div>
        <input type='date' placeholder='Select Date'
          value={dateInput} onChange={(event) => setDateInput(event.target.value)} />
        <select value={courtId} onChange={chooseCourt}>
          <option disabled value='0'>Select Court</option>
          {courtReducer.map((court) => {
            return <option key={court.id} value={court.id}>{court.name}</option>
          })}
        </select>
        <table>
          <thead>
            <tr>
              <th>PLAYERS</th>
              <th>3PT MADE</th>
              <th>3PT MISSED</th>
              <th>2PT MADE</th>
              <th>2PT MISSED</th>
              <th>REBOUNDS</th>
              <th>ASSISTS</th>
              <th>BLOCKS</th>
              <th>STEALS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {playerReducer.map((player) => {
                return <td key={player.id} value={player.id}> {player.player_name}</td>
              })}
              <td><button onClick={onMadeThree}>Made : {threeMade}</button></td>
              <td><button onClick={onMissedThree}>Missed : {threeMissed}</button></td>
              <td><button onClick={onMadeTwo}>Made : {twoMade}</button></td>
              <td><button onClick={onMissedTwo}>Missed : {twoMissed}</button></td>
              <td><button onClick={onRebound}>Add Reb : {rebounds}</button></td>
              <td><button onClick={onAssists}>Add Ast : {assists}</button></td>
              <td><button onClick={onBlock}>Add Blk : {blocks}</button></td>
              <td><button onClick={onSteal}>Add Stl : {steals}</button></td>
            </tr>
          </tbody>
        </table>
        <div>
          <TextareaAutosize
            aria-label="empty textarea"
            value={commentInput}
            placeholder="Comments about the game"
            onChange={(event) => { setCommentInput(event.target.value) }}
            style={{ width: 200 }}
          />
          {/* <textarea
            value={commentInput}
            type='text'
            onChange={(event) => {setCommentInput(event.target.value) }}
            placeholder="Comments about the game"
          /> */}
          <button onClick={handleSubmitGame}>Submit the Game</button>
        </div>
      </div>
  );
}
export default InfoPage;
