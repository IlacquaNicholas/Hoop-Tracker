import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function CheckOutStatsDetail ({stat}){
    
    const dispatch = useDispatch();
    const history = useHistory();
    


    return (
        <tr>
            <td>{stat.three_made}</td>
            <td>{stat.three_missed}</td>
            <td>{stat.two_made}</td>
            <td>{stat.two_miss}</td>
            <td>{stat.rebounds}</td>
            <td>{stat.assists}</td>
            <td>{stat.blocks}</td>
            <td>{stat.steals}</td>
            <td>
                <button
                onClick={()=> history.push(`/edit/${stat.id}`)}>
                Edit
                </button>


            </td>
        </tr>
    )
}

export default CheckOutStatsDetail;