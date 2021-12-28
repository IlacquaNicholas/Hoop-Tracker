import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchPlayers (){
    try{
        const response = yield axios({
            method: 'GET', 
            url:'/addPlayer'
        })
        yield put({
            type: 'SET_PLAYERS',
            payload:response.data
        })
    } catch (err) {
        console.log('in POST error', err);
    }
}
function* addNewPlayer(action){
    try{
        console.log('In addNewPlayer Saga', action.payload);
        const response = yield axios({
            method: 'POST', 
            url:'/addPlayer',
            data: action.payload
        })
        yield put({
            type: 'SAGA_FETCH_PLAYERS'
        })
    } catch (err) {
        console.log('in addNewPlayer error', err);
    }
}
function* deletePlayer(action){
    try{
        console.log('In deletePlayer saga', action.payload);
        const response = yield axios({
            method: 'DELETE',
            url: `/addPlayer/${action.payload}`
        })
        yield put ({
            type: 'SAGA_FETCH_PLAYERS'
        })
    } catch (err) {
        console.error('deletePlayer error:', err);
    };
}

function* addPlayerSaga() {
    yield takeLatest('SAGA_FETCH_PLAYERS', fetchPlayers)
    yield takeLatest('SAGA_ADD_PLAYER', addNewPlayer);
    yield takeLatest('SAGA_DELETE_PLAYER', deletePlayer )
}

export default addPlayerSaga ;

