const statsReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_THREE_MADE'://Will I need one for each stat being taken? 
            return action.payload;
        default:
            return state;
    }
};


export default statsReducer;