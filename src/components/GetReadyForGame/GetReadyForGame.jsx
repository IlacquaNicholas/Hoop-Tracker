import React, { useState, useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';




function GetReadyForGame() {
    const dispatch = useDispatch();
    const history = useHistory();
    //setting local state
    const [courtId, setCourtID] = useState(0);
    const [playerId, setPlayerId] = useState(0);
    const [dateInput, setDateInput] = useState('');

    //grabbing the Court reducer
    const courtReducer = useSelector ((store)=> store.courtReducer)
    const playerReducer = useSelector((store) => store.playerReducer)
  

    useEffect (()=>{
        //Need to Get Courts and put it here
        dispatch ({
            type: 'SAGA_FETCH_COURTS'
        })
    }, [])

    useEffect(() => {
        //Need to Get Players for the dropdown and put it here
        dispatch({
            type: 'SAGA_FETCH_PLAYERS'
        })
    }, [])

    function chooseCourt(event) {
        event.preventDefault();
        setCourtID(event.target.value);
    };

    function choosePlayer(event) {
        event.preventDefault();
        setPlayerId(event.target.value);
    };

    const handleReadyForGame =()=>{
        dispatch({
            type: 'SAGA_READY_FOR_GAME',
            payload: {
                date: dateInput,
                court_id: courtId, 
                playerName_id:playerId
            }
        })
        history.push('/info')
    }

    return(
        <div>
            <h1>Lets Get Ready for the Game!</h1>
            <select value={courtId} onChange={chooseCourt}>
                <option disabled value='0'>Select Court</option>
                {courtReducer.map((court) => {
                    return <option key={court.id} value={court.id}>{court.name}</option>
                })}
                </select>
            <select value={playerId} onChange={choosePlayer}>
                <option disabled value='0'>Select Team</option>
                {playerReducer.map((player) => {
                    return <option key={player.id} value={player.id}>{player.team_name}</option>
                })}
            </select>
            <input type='date' placeholder='Select Date'
                value={dateInput} onChange={(event) => setDateInput(event.target.value)} />
            <div>
                <button onClick={handleReadyForGame}>Ready for the Game</button>
            </div>
        </div>
    )
}

export default GetReadyForGame;