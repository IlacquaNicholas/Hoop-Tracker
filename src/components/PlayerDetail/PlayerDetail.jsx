import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './PlayerDetail.css';

function PlayerDetail ({player}){

    const dispatch = useDispatch();
    const history = useHistory();

    
    const deletePlayer = (player_id) => {
        console.log(player_id);
        dispatch({
            type: 'SAGA_DELETE_PLAYER',
            payload: player_id
        })
    }

    return(
        <tr>
            <td>{player.team_name}</td>
            <td>{player.player_name}</td>
            <td>
                <button onClick={() => deletePlayer(player.id)}>Delete</button>
            </td>
        </tr>

    )
}
 export default PlayerDetail;
