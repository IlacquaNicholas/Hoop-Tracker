const editStatsReducer = (state={}, action)=>{
    switch (action.type){
        case 'SET_EDIT_STATS':
    return {
        three_made: action.payload.three_made,
        three_missed: action.payload.three_missed,
        two_made: action.payload.two_made,
        two_miss: action.payload.two_miss,
        rebounds: action.payload.rebounds,
        assists: action.payload.assists,
        blocks: action.payload.blocks,
        steals: action.payload.steals,
    }
    default:
        return state;
}   
}
export default editStatsReducer;