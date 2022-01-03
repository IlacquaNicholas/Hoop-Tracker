const courtReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_COURT':
            return action.payload;
        default:
            return state;
    }
}

export default courtReducer;