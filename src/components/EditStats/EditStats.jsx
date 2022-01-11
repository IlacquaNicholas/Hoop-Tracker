import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

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
    }, [])
    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'SAGA_EDIT_GAME_STATS',
            payload: {
                id: params.id,
                three_made: statsToEdit.three_made,
                three_missed: statsToEdit.three_missed,
                two_made: statsToEdit.two_made,
                two_made: statsToEdit.two_made,
                rebounds: statsToEdit.rebounds,
                assists: statsToEdit.assists,
                blocks: statsToEdit.blocks,
                steals: statsToEdit.steals
            }
        })
        history.push('/');
    }

    return(
        <div>
            <h2>Edit Stats:</h2>
            <form>
                <input
                placeholder = '3pt Made'
                value={statsToEdit.three_made}
                />
                <input
                    placeholder='3pt Missed'
                    value={statsToEdit.three_missed}/>
                <input
                    placeholder='2pt Made'
                    value={statsToEdit.two_made}/>
                <input
                    placeholder='2pt Missed'
                    value={statsToEdit.two_miss}/>
                <input
                    placeholder='Rebounds'
                    value={statsToEdit.rebounds}/>
                <input
                    placeholder='Assists'
                    value={statsToEdit.assists}/>
                <input
                    placeholder='Blocks'
                    value={statsToEdit.blocks}/>
                <input
                    placeholder='Steals'
                    value={statsToEdit.steals}/>
                <button onClick={handleUpdateSubmit}>Update</button>
            </form>
                <button
                    onClick={() => history.push('/seeGameStats')}>Cancel</button>
                {/* <table>
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
                        </tr> */}
                                
                                    
            

        </div>
    )
    
}

export default EditStats;