import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
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
                <h4>3pt Made</h4>
                <input
                    placeholder = '3pt Made'
                    value={statsToEdit.three_made || 0}
                    onChange={handleThreeMade}/>
                <h4>3pt Missed</h4> 
                <input
                    placeholder='3pt Missed'
                    value={statsToEdit.three_missed || 0}
                    onChange = {handleThreeMiss}/>
                <h4>2pt Missed</h4> 
                <input
                    placeholder='2pt Made'
                    value={statsToEdit.two_made || 0}
                    onChange={handleTwoMade}/>
                <h4>2pt Missed</h4> 
                <input
                    placeholder='2pt Missed'
                    value={statsToEdit.two_miss || 0}
                    onChange={handleTwoMiss}/>
                <h4>3pt Rebounds</h4> 
                <input
                    placeholder='Rebounds'
                    value={statsToEdit.rebounds || 0}
                    onChange={handleRebounds}/>
                <h4>Assists</h4> 
                <input
                    placeholder='Assists'
                    value={statsToEdit.assists || 0}
                    onChange={handleAssists}/>
                <h4>Blocks</h4> 
                <input
                    placeholder='Blocks'
                    value={statsToEdit.blocks || 0}
                    onChange={handleBlocks}/>
                <h4>Steals</h4> 
                <input
                    placeholder='Steals'
                    value={statsToEdit.steals|| 0}
                    onChange={handleSteals}/>
            </form>
                <button onClick={handleUpdateSubmit}>Update</button>
                <button onClick={() => history.push('/seeGameStats')}>Cancel</button>
        </div>
    )
    
}

export default EditStats;