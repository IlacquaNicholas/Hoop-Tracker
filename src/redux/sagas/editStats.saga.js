import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchPlayerStats(action) {
    try {
        const response = yield axios({
            method: 'GET',
            url: `/editStats/${action.payload}`
        })
        console.log('fetchPlayerStats response.data', response.data);
        const editStats = response.data;
        yield put({
            type: 'SET_EDIT_STATS',
            payload: editStats
        })
    } catch (err) {
        console.log('in fetchPlayerStats saga error', err);
    }
}

function* editStatSaga(){
    yield takeLatest('SAGA_FETCH_PLAYER_STATS', fetchPlayerStats)
}
export default editStatSaga;