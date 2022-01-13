


const statsReducer = (state = {three_made:0, three_missed:0,two_made:0, two_miss:0,total_points:0,
rebounds:0, assists:0, blocks:0, steals:0 }, action) => {
    switch (action.type) {
        case 'SET_THREE_MADE'://Will I need one for each stat being taken? 
            return {...state,three_made: state.three_made + 1}
        case 'SET_THREE_MISSED'://Will I need one for each stat being taken? 
            return { ...state, three_missed: state.three_missed + 1 }
        case 'SET_TWO_MADE'://Will I need one for each stat being taken? 
            return { ...state, two_made: state.two_made + 1 }
        case 'SET_TWO_MISS'://Will I need one for each stat being taken? 
            return { ...state, two_miss: state.two_miss + 1 }
        case 'SET_REBOUNDS'://Will I need one for each stat being taken? 
            return { ...state, rebounds: state.rebounds + 1 }
        case 'SET_ASSISTS'://Will I need one for each stat being taken? 
            return { ...state, assists: state.assists + 1 }
        case 'SET_BLOCKS'://Will I need one for each stat being taken? 
            return { ...state, blocks: state.blocks + 1 }
        case 'SET_STEALS'://Will I need one for each stat being taken? 
            return { ...state, steals: state.steals + 1 }
            default: 
                return state; 
}

}
export default statsReducer;