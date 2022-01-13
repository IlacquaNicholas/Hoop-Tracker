import React, { useState, useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';
import { Box } from '@mui/material';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import'./CheckOutGameStats.css';


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
    const totalPointsScored=()=>{
        console.log('points', points);
        let points = []
        let twoPoints = displayStatsReducer.two_made;
        let threePoints = displayStatsReducer.three_made;
        let totalThrees = threePoints * 3;
        let totalTwos = twoPoints * 2;
        let totalPoints = totalTwos + totalThrees
        points.push(totalPoints)
        let total = 0;
        for (let i = 0; i < points.length; i++) {
            total += points[i];
        }
        return total
    }

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
            <h1>Check out stats for a game!</h1>
            <h2>Please choose the date of the game was played.</h2>
            <select value={gameId} onChange={chooseGame}>
                <option disabled value= '0'>Select date of Game</option>
                {getGamesReducer.map((game) => {
                    return( 
                    <option key={game.id} value={game.id}>{game.date}</option>
                )})}
            </select>
            <div>
                <div>
                    <h3>Game #:{displayStatsReducer.game_id}</h3>
                    <h3>Court: {displayStatsReducer.name}</h3>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>PLAYERS</th>
                            <th>3PT MADE</th>
                            <th>3PT MISSED</th>
                            <th>2PT MADE</th>
                            <th>2PT MISSED</th>
                            <th>TOTAL POINTS</th>
                            <th>REBOUNDS</th>
                            <th>ASSISTS</th>
                            <th>BLOCKS</th>
                            <th>STEALS</th>
                            <th>EDIT</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{displayStatsReducer.player_name}</td>
                            <td>{displayStatsReducer.three_made}</td>
                            <td>{displayStatsReducer.three_missed}</td>
                            <td>{displayStatsReducer.two_made}</td>
                            <td>{displayStatsReducer.two_miss}</td>
                            <td>{totalPointsScored()}</td>
                            <td>{displayStatsReducer.rebounds}</td>
                            <td>{displayStatsReducer.assists}</td>
                            <td>{displayStatsReducer.blocks}</td>
                            <td>{displayStatsReducer.steals}</td>
                            <td>
                                <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                    <Fab
                                        onClick={onEditClick}
                                        style={{ backgroundColor: '#2ec4b6'}}
                                        color="secondary" aria-label="edit">
                                        <EditIcon />
                                    </Fab>
                                </Box>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <h3>Comments on the Game:</h3>
                    <h3>{displayStatsReducer.comments}</h3>
                </div>
            </div>

        
        </div>
    )
}

export default CheckOutGameStats;