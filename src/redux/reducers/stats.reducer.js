const statsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_STATS'://Will I need one for each stat being taken? 
            return action.payload;
        default:
            return state;
    }
};

// user will be on the redux state at:
// state.user
export default statsReducer;