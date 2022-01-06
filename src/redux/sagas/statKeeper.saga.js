import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// function* addStat (action){
//     console.log('In addStat saga', action.payload);
    
//     try{
//         const response = yield axios({
//             method: 'POST',
//             url:'/stats',
//             data: action.payload
//         })
//     } catch (err) {
//         console.log('in addStat saga error', err);
//     }
// }


function* statKeeperSaga() {
    
}
export default statKeeperSaga;