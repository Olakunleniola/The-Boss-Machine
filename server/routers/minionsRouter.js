const express = require('express');
const minionsRouter = express.Router();
const {
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
} = require('../db');
const workRouter = require('./workRouter');

minionsRouter.param('minionsId', (req, res, next, id) => {
    if(Number(id)){
        const minionsId = id; 
        const minionsAtId = getFromDatabaseById('minions', minionsId);
        if(minionsAtId) {
            req.minionsAtId = minionsAtId;
            req.minionsId = minionsId;
            next();
        }else {
            res.status(404).send("Not Found")
        }
    }else {
        res.status(404).send("Not Found")
    }
})

minionsRouter.get('/', (req,res,next) => {
    const minions = getAllFromDatabase('minions');
    res.status(200).send(minions);
})

minionsRouter.post('/', (req, res, next) => {
    const minions = addToDatabase('minions', req.body);
    if(minions) {
        res.status(201).send(minions);
    }else {
        res.status(404).send('Bad Request');
    }
})

minionsRouter.get('/:minionsId', (req ,res, next) => {
    res.status(200).send(req.minionsAtId);
})

minionsRouter.put('/:minionsId', (req, res, next) => {
    const minionsToUpdate = updateInstanceInDatabase('minions', req.body);
    res.status(200).send(minionsToUpdate);
})

minionsRouter.delete('/:minionsId', (req, res, next) => {
    const deleted = deleteFromDatabasebyId('minions', req.minionsId);
    if(deleted){res.status(204).send()}
})

minionsRouter.use('/:minionsId/work', workRouter)


module.exports = minionsRouter;