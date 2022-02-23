import React, {useState, useEffect} from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
import PlayerDetail from '../PlayerDetail/PlayerDetail';
import './UserPage.css';



function UserPage() {

  const dispatch = useDispatch();
  const history = useHistory();
  
  //setting local state for team and player
  const [teamNameInput, setTeamNameInput] = useState('');
  const [playerNameInput, setPlayerNameInput] = useState('');

  const playerReducer = useSelector((store) => store.playerReducer)
  //This is adding my players names and team names to my DB using saga.
  const onPlayerAdd = (e) => {
    e.preventDefault();
    dispatch({
      type: 'SAGA_ADD_PLAYER',
      payload: {
        teamName: teamNameInput,
        playerName: playerNameInput
      }
    })
  }

  const onGetReadyClick = ()=>{
    history.push('/info')
  }
  

  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  return (
    <>
    <div className="container">
      <h2>Welcome, let the stat keeping begin {user.username}!</h2>
      {/* <p>Your ID is: {user.id}</p> */}
      <input className="input" type='text' placeholder='Add Team Name'
        value={teamNameInput} onChange={(event) => setTeamNameInput(event.target.value)} />
        <input className="input" type='text' placeholder='Add Player Name'
        value={playerNameInput} onChange={(event) => setPlayerNameInput(event.target.value)} />
        <button onClick={onPlayerAdd}>Add Team/Player</button>
    </div>
    <div>
      <table>
        <thead>
          <tr>
            <th>TEAM</th>
            <th>PLAYER</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
            {playerReducer.map((player) => {
            return <PlayerDetail key={player.id} player={player}/> 
        })}
        </tbody>
      </table>
        <button onClick={onGetReadyClick}>Let the stat keeping begin!</button>
        <div>
      <LogOutButton className="btn" />
        </div>
    </div>
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
