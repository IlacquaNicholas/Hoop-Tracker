import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

function EditStats(){

    const params = useParams();
    console.log('params:');
    console.log(params);

    const history = useHistory();

    return(
        <div>
            <h2>Edit Stats:</h2>
            <form>
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
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>
                                <button>Update</button>
                                <button
                                    onClick={()=> history.push('/seeGameStats')}>Cancel</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>

        </div>
    )
    
}

export default EditStats;