const editStatsReducer = (state={}, action)=>{
    switch (action.type){
        case 'SET_EDIT_STATS':
    return {
        three_made: 'three_made',
        three_missed:'three_missed',
        three_made: 'two_made',
        three_made: 'two_miss',
        three_made: 'rebounds',
        three_made: 'assists',
        three_made: 'blocks',
        three_made: 'steals'
    }
    default:
        return state;
}   
}
export default editStatsReducer;