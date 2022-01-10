import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//This is a saga to retrieve the courts names from the db.  
function* fetchGames(action) {
    
    try {
        const response = yield axios({
            method: 'GET',
            url: '/gameId'
        })
        console.log('in fetchGame response.data', response.data);
        
        yield put({
            type: 'SET_GAME_INFO',
            payload: response.data
        })
    } catch (err) {
        console.log('in GET fetchCourts error', err);
    }
}

function* fetchGameByDate(action) {

    try {
        const response = yield axios({
            method: 'GET',
            url: '/gameId'
        })
        console.log('in fetchGame response.data', response.data);

        yield put({
            type: 'SET_GAME_INFO',
            payload: response.data
        })
    } catch (err) {
        console.log('in GET fetchCourts error', err);
    }
}

function* getGamesSaga() {
    yield takeLatest('SAGA_FETCH_GAMES', fetchGames)

}

export default getGamesSaga;