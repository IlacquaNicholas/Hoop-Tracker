import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box';

import swal from 'sweetalert';




function EditStats(){

    const params = useParams();
    console.log('params:');
    console.log(params);

    const history = useHistory();
    const dispatch = useDispatch();
    const statsToEdit = useSelector((store) => store.editStatsReducer)

    useEffect(() => {
        dispatch({
            type:'SAGA_FETCH_PLAYER_STATS',
            payload: params.id
        })
    }, [params.id])

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'SAGA_EDIT_GAME_STATS',
            payload: {
                id: params.id,
                three_made: statsToEdit.three_made,
                three_missed: statsToEdit.three_missed,
                two_made: statsToEdit.two_made,
                two_miss: statsToEdit.two_miss,
                rebounds: statsToEdit.rebounds,
                assists: statsToEdit.assists,
                blocks: statsToEdit.blocks,
                steals: statsToEdit.steals,
                comments: statsToEdit.comments
            }
        })

        history.push('/seeGameStats');
    }
    const handleThreeMade = (e)=>{
        dispatch({
            type:'SET_THREE_MADE',
            payload: e.target.value
        })
    }
    const handleThreeMiss = (e) => {
        dispatch({
            type: 'SET_THREE_MISSED',
            payload: e.target.value
        })
    }
    const handleTwoMade = (e) => {
        dispatch({
            type: 'SET_TWO_MADE',
            payload: e.target.value
        })
    }
    const handleTwoMiss = (e) => {
        dispatch({
            type: 'SET_TWO_MISS',
            payload: e.target.value
        })
    }
    const handleRebounds = (e) => {
        dispatch({
            type: 'SET_REBOUNDS',
            payload: e.target.value
        })
    }
    const handleAssists = (e) => {
        dispatch({
            type: 'SET_ASSISTS',
            payload: e.target.value
        })
    }
    const handleBlocks = (e) => {
        dispatch({
            type: 'SET_BLOCKS',
            payload: e.target.value
        })
    }
    const handleSteals = (e) => {
        dispatch({
            type: 'SET_STEALS',
            payload: e.target.value
        })
    }

    return(
        <div>
            <h2>Edit Stats:</h2>
            <form>
                <TextField
                    id="outlined-helperText"
                    label="3pts Made"
                    defaultValue="Default Value"
                    helperText="Edit three pointers made"
                    value={statsToEdit.three_made}
                    onChange={handleThreeMade}
                />
                <TextField
                    id="outlined-helperText"
                    label="3pts Missed"
                    defaultValue="Default Value"
                    helperText="Edit three pointers missed"
                    value={statsToEdit.three_missed}
                    onChange={handleThreeMiss}
                />
                <TextField
                    id="outlined-helperText"
                    label="2pts Made"
                    defaultValue="Default Value"
                    helperText="Edit two pointers made"
                    value={statsToEdit.two_made}
                    onChange={handleTwoMade}
                />
                <TextField
                    id="outlined-helperText"
                    label="2pts Missed"
                    defaultValue="Default Value"
                    helperText="Edit two pointers missed"
                    value={statsToEdit.two_miss}
                    onChange={handleTwoMiss}
                />
                <TextField
                    id="outlined-helperText"
                    label="Rebounds"
                    defaultValue="Default Value"
                    helperText="Edit rebounds"
                    value={statsToEdit.rebounds}
                    onChange={handleRebounds}
                />
                <TextField
                    id="outlined-helperText"
                    label="Assists"
                    defaultValue="Default Value"
                    helperText="Edit assists"
                    value={statsToEdit.assists}
                    onChange={handleAssists}
                />
                <TextField
                    id="outlined-helperText"
                    label="Blocks"
                    defaultValue="Default Value"
                    helperText="Edit blocks"
                    value={statsToEdit.blocks}
                    onChange={handleBlocks}
                />
                <TextField
                    id="outlined-helperText"
                    label="Steals"
                    defaultValue="Default Value"
                    helperText="Edit steals"
                    value={statsToEdit.steals}
                    onChange={handleSteals}
                />
            </form>
                <button onClick={handleUpdateSubmit}>Update</button>
                <button onClick={() => history.push('/seeGameStats')}>Cancel</button>
        </div>
    )
    
}

export default EditStats;