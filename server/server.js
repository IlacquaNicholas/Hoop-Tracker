const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();

const sessionMiddleware = require('./modules/session-middleware');
const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const playerRouter = require('./routes/player.router')
const courtRouter = require('./routes/court.router')
const statsRouter = require('./routes/stats.router')
const gameIdRouter = require('./routes/gameId.router')
const editStatsRouter = require('./routes/editStats.router')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/addPlayer', playerRouter);
app.use('/courtName', courtRouter);
app.use('/stats', statsRouter);
app.use('/gameId', gameIdRouter);
app.use('/editStats', editStatsRouter);
// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
