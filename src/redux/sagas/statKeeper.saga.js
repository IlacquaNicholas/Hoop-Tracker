import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchGameStats(action){
    try{
        
        const response = yield axios({
            method: 'GET',
            url: `/stats/${action.payload}`
        })
        console.log('in fetchGameStats saga response.data', response.data);
        yield put ({
            type: 'SET_DISPLAY_STATS',
            payload: response.data
        })
    } catch (err) {
        console.log('in  fetchGameStats saga error', err);
    }
}

function* addGameStats (action){
    console.log('In addStat saga', action.payload);
    
    try{
        const response = yield axios({
            method: 'POST',
            url:'/stats',
            data: action.payload
        })
        yield put({
            type: 'SAGA_FETCH_GAME_STATS'
        })
    } catch (err) {
        console.log('in addStat saga error', err);
    }
}
// Use this for a possible edit
// function* fetchOnePlayer (action){
//     try{
//         const response = yield axios({
//             method:'GET',
//             url:`/game/${action.payload}`
//         })
//         console.log('fetchOnePlayer response.data', response.data);
        
//     } catch (err) {
//         console.log('in fetchOnePlayer saga error', err);
//     }
// }


function* statKeeperSaga() {
    yield takeLatest('SAGA_ADD_GAME_STATS', addGameStats)
    yield takeLatest('SAGA_FETCH_GAME_STATS', fetchGameStats)
    // yield takeLatest('SAGA_FETCH_ONE_PLAYER', fetchOnePlayer)
}
export default statKeeperSaga;