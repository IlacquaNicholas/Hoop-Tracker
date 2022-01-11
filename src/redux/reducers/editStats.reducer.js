import { useParams } from "react-router-dom"

const editStatsReducer = (state={}, action)=>{
    switch (action.type){
        case 'SET_EDIT_STATS':
            console.log('action.payload reducer', action.payload);
        return action.payload
    // return {
    //     three_made: action.payload.three_made,
    //     three_missed: action.payload.three_missed,
    //     two_made: action.payload.two_made,
    //     two_miss: action.payload.two_miss,
    //     rebounds: action.payload.rebounds,
    //     assists: action.payload.assists,
    //     blocks: action.payload.blocks,
    //     steals: action.payload.steals,
    // }
        case 'SAGA_EDIT_GAME_STATS':
            return action.payload
        case 'SET_THREE_MADE':
            return{...state , three_made:action.payload}
        case 'SET_THREE_MISSED':
            return { ...state, three_missed: action.payload }
        case 'SET_TWO_MADE':
            return { ...state, two_made: action.payload }
        case 'SET_TWO_MISS':
            return { ...state, two_miss: action.payload }
        case 'SET_REBOUNDS':
            return { ...state, rebounds: action.payload }
        case 'SET_ASSISTS':
            return { ...state, assists: action.payload }
        case 'SET_BLOCKS':
            return { ...state, blocks: action.payload }
        case 'SET_STEALS':
            return { ...state, steals: action.payload }
            
    default:
        return state;
}   
}
export default editStatsReducer;