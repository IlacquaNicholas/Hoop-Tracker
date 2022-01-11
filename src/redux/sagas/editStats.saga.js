import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchPlayerStats(action) {
    try {
        const response = yield axios({
            method: 'GET',
            url: `/editStats/${action.payload}`
        })
        const editStats = response.data;
        yield put({
            type: 'SET_EDIT_STATS',
            payload: editStats
        })
        console.log('in fetchPlayerStats saga', editStats);
    } catch (err) {
        console.log('in fetchPlayerStats saga error', err);
    }
}

function* editGameStats(action) {
    try {
        console.log('editGameStats action.payload', action.payload)
        yield axios({
            method: 'PUT',
            url: `/editStats/${action.payload.id}`,
            data: action.payload
        })
        yield put({
            type: 'SAGA_FETCH_PLAYER_STATS'
        })
    } catch (err) {
        console.log(err)
    }
}

function* editStatSaga(){
    yield takeLatest('SAGA_FETCH_PLAYER_STATS', fetchPlayerStats),
        yield takeLatest('SAGA_EDIT_GAME_STATS', editGameStats)
}
export default editStatSaga;