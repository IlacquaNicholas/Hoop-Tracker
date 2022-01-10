const getGamesReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GAME_INFO':
            return action.payload;
        default:
            return state;
    }
}

export default getGamesReducer;