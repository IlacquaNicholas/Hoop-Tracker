import React, { useState, useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import CheckOutStatsDetail from '../CheckOutStatsDetail/CheckOutStatsDetail';


function CheckOutGameStats() {

    const history = useHistory();
    const dispatch = useDispatch();
    const displayStatsReducer = useSelector(store => store.displayStatsReducer)

    useEffect(() => {
        //Need to Get Courts and put it here
        dispatch({
            type: 'SAGA_FETCH_GAME_STATS'
        })
    }, [])


    return(
        <div>
            <h1>Lets see the stats for a game!</h1>
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
                    {/* <tbody>
                        {displayStatsReducer.map(stat => {
                            return <CheckOutStatsDetail key={stat.id} stat={stat} />
                        })}
                    </tbody> */}
                </table>
            </div>

        
        </div>
    )
}

export default CheckOutGameStats;