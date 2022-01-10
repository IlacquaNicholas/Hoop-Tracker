import React, { useState, useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CheckOutStatsDetail from '../CheckOutStatsDetail/CheckOutStatsDetail';


function CheckOutGameStats() {

    const history = useHistory();
    const dispatch = useDispatch();
    const displayStatsReducer = useSelector((store) => store.displayStatsReducer)

    useEffect(() => {
        dispatch({
            type: 'SAGA_FETCH_GAME_STATS'
        })
    }, [])


    return(
        <div>
            <h1>Lets see the stats for a game!</h1>
            <div>
                <div>
                    <p>Date: {displayStatsReducer.date}</p>
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
                                <button
                                    onClick={() => history.push(`/edit/${stat.id}`)}>
                                    Edit
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <p>Comments on the Game:{displayStatsReducer.comments}</p>
                </div>
            </div>

        
        </div>
    )
}

export default CheckOutGameStats;