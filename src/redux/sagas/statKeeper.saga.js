import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchGameStats(){
    try{
        const response = yield axios ({
            method: 'GET',
            url: 'game'
        })
        console.log('in fetchGameStats saga response.data', response.data);
        
        yield put ({
            type: 'SET_THREE_MADE',
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
            url:'/game',
            data: action.payload
        })
    } catch (err) {
        console.log('in addStat saga error', err);
    }
}


function* statKeeperSaga() {
    yield takeLatest('SAGA_ADD_GAME_STATS', addGameStats)
}
export default statKeeperSaga;