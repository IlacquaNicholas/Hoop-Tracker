import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


function CheckOutStatsDetail ({game}){
    
    const dispatch = useDispatch();
    const history = useHistory();
    const displayStatsReducer = useSelector((store) => store.displayStatsReducer)

    


    return (
        <>
        {/* <h1>Lets see the stats for a game!</h1>
            <div>
                <div>
                    <option>{game.date}</option>
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
                                {/* <button
                                    onClick={() => history.push(`/edit/${game.id}`)}>
                                    Edit
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <h3>Comments on the Game:{displayStatsReducer.comments}</h3>
                </div>
            </div> */}
        </>
    )
}

export default CheckOutStatsDetail;