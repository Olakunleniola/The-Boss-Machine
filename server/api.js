const express = require('express');
const apiRouter = express.Router();
const morgan = require('morgan')
const bodyParser = require('body-parser')
const minionsRouter = require('./routers/minionsRouter');
const meetingsRouter = require('./routers/meetingsRouter');
const ideasRouter = require('./routers/ideasRouter');

apiRouter.use(morgan('dev'))

// Add middware for parsing request bodies here:
apiRouter.use(bodyParser.json())

apiRouter.use('/minions', minionsRouter)
apiRouter.use('/meetings', meetingsRouter)
apiRouter.use('/ideas', ideasRouter)

apiRouter.use((err, req, res, next) => {
    console.error(`ERROR: ${err}`);
    res.status(500).send(err.message);
})

module.exports = apiRouter;
