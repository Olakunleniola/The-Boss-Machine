const express = require('express');
const ideasRouter = express.Router();
const {
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
} = require('../db')
const checkMillionDollarIdea = require('../checkMillionDollarIdea')


ideasRouter.param('ideaId', (req, res, next, id) => {
    if(Number(id)){
        const ideaId = id; 
        const ideaAtId = getFromDatabaseById('ideas', ideaId)
        if(ideaAtId) {
            req.ideaAtId = ideaAtId;
            req.ideaId =ideaId;
            next()
        }else {
            res.status(404).send("Not Found")
        }
    }else {
        res.status(404).send("Not Found")
    }
})

ideasRouter.get('/', (req, res, next) => {
    const ideas = getAllFromDatabase('ideas');
    res.status(200).send(ideas)
})

ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
    const idea = addToDatabase('ideas', req.body);
    if(idea) {
        res.status(201).send(idea)
    }else {
        res.status(404).send('Bad Request')
    }
})

ideasRouter.get('/:ideaId', (req ,res, next) => {
    res.status(200).send(req.ideaAtId)
})

ideasRouter.put('/:ideaId', checkMillionDollarIdea, (req, res, next) => {
    const ideaToUpdate = updateInstanceInDatabase('ideas', req.body);
    res.status(200).send(ideaToUpdate)
})

ideasRouter.delete('/:ideaId', (req, res, next) => {
    const deleted = deleteFromDatabasebyId('ideas', req.ideaId);
    if(deleted){res.status(204).send()}
})


module.exports = ideasRouter