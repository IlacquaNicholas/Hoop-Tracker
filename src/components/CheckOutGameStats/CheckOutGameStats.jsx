import React, { useState, useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CheckOutStatsDetail from '../CheckOutStatsDetail/CheckOutStatsDetail';
import swal from 'sweetalert';


function CheckOutGameStats() {

    const params = useParams();    
    const [gameId, setGameId] = useState(0);

    const history = useHistory();
    const dispatch = useDispatch();
    const displayStatsReducer = useSelector((store) => store.displayStatsReducer)
    const getGamesReducer = useSelector((store) => store.getGamesReducer)
    
    //need to create a 
    useEffect(() => {
        dispatch({
            type:'SAGA_FETCH_GAMES'
        })
    }, [])

    function chooseGame(event) {
        event.preventDefault();
        dispatch({
            type: 'SAGA_FETCH_GAME_STATS',
            payload: event.target.value
        })
    };

    const onEditClick=()=>{
        history.push(`/edit/${displayStatsReducer.game_id}`)
    }

    return(
        <div>
            <select value={gameId} onChange={chooseGame}>
                <option disabled value= '0'>Select date of Game</option>
                {getGamesReducer.map((game) => {
                    return( 
                    <option key={game.id} value={game.id}>{game.date}</option>
                )})}
            </select>
            <h1>Lets see the stats for a game!</h1>
            <div>
                <div>
                    <p>Game #:{displayStatsReducer.game_id}</p>
                    <p>Court: {displayStatsReducer.name}</p>
                </div>
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
                            <td>{displayStatsReducer.player_name}</td>
                            <td>{displayStatsReducer.three_made}</td>
                            <td>{displayStatsReducer.three_missed}</td>
                            <td>{displayStatsReducer.two_made}</td>
                            <td>{displayStatsReducer.two_miss}</td>
                            <td>{displayStatsReducer.rebounds}</td>
                            <td>{displayStatsReducer.assists}</td>
                            <td>{displayStatsReducer.blocks}</td>
                            <td>{displayStatsReducer.steals}</td>
                            <td>
                                {/* //need to figure out what the Params.id should
                                //be after /edit/${ ? } */}
                                <button
                                    onClick={onEditClick}>
                                    Edit
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <h3>Comments on the Game:{displayStatsReducer.comments}</h3>
                </div>
            </div>

        
        </div>
    )
}

export default CheckOutGameStats;