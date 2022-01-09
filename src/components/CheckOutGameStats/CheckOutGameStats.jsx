import React, { useState, useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function CheckOutGameStats() {

    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    const displayStatsReducer = useSelector(store => store.displayStatsReducer)

    useEffect(() => {
        //Need to Get Courts and put it here
        dispatch({
            type: 'SAGA_FETCH_GAME_STATS',
            payload:params.id

        })
    }, [params.id])


    return(
        <div>
            <h1>Lets see the stats for a game!</h1>
            <h1>{displayStatsReducer.rebounds}</h1>

        
        </div>
    )
}

export default CheckOutGameStats;