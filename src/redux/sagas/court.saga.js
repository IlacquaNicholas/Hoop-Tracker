import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//This is a saga to retrieve the courts names from the db.  
function* fetchCourts(){
    try{
        const response = yield axios ({
            method : 'GET', 
            url: '/courtName'
        })
        yield put({
            type: 'SET_COURT', 
            payload: response.data
        })
    } catch (err) {
        console.log('in GET fetchCourts error', err);
    }
}
function* fetchReadyForGame(){
    try{
        const response = yield axios({
            method:'GET',
            url: 
        })
        yield put({
            type: 'SET_GAME',
            payload: response.data
        })
    } catch (err) {
        console.log('in GET fetchReadyForGame error', err);
    }
}

function* createGameInfo (action){
    try{
        const response = yield axios({
            method: 'POST',
            url:'/courtName',
            data: action.payload
        })
        yield put({
            type: 'SAGA_FETCH_READY_FOR_GAME'
        })
    } catch (err) {
        console.log('in POST createGameInfo error', err);
    }
}


function* getCourtSaga() {
    yield takeLatest('SAGA_FETCH_COURTS', fetchCourts)
    yield takeLatest('SAGA_FETCH_READY_FOR_GAME', fetchReadyForGame)
    yield takeLatest('SAGA_READY_FOR_GAME', createGameInfo)
}

export default getCourtSaga;