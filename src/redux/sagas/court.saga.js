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

function* getCourtSaga() {
    yield takeLatest('SAGA_FETCH_COURTS', fetchCourts)
    
}

export default getCourtSaga;