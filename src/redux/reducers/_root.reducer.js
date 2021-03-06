import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import playerReducer from './player.reducer';
import statsReducer from './stats.reducer';
import courtReducer from './court.reducer';
import displayStatsReducer from './displayStats.reducer';
import editStatsReducer from './editStats.reducer';
import getGamesReducer from './getGames.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  playerReducer, // This will hold my players and team names
  statsReducer, // This will hold all the stats being taken
  courtReducer, //This will hold the courts being played at 
  displayStatsReducer, // This will grab all stats that were recorded from a single game
  getGamesReducer, // This is holding the games ids that were played
  editStatsReducer // This is going to hold my stats that are being edited
});

export default rootReducer;
