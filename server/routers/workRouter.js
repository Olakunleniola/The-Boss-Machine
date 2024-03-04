const workRouter = require('express').Router({mergeParams: true});
const { get } = require('../../server');
const {
    getAllFromDatabase,
    getFromDatabaseById,
    addToDatabase,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
} = require('../db');

workRouter.param('workId', (req, res, next, id) => {
    const works = getAllFromDatabase('work');
    const workAtMinion = works.filter(work => work.minionId === req.params.minionsId);
    const exist = workAtMinion.findIndex(itm => itm.id === id)
    if(exist !== -1){
        req.body.minionId = req.params.minionsId;
        req.body.id = id;
        req.id = id
        next()
    }else {
        res.status(400).send("work does not exist")
    }
})

workRouter.get('/', (req, res, next) => {
    const works = getAllFromDatabase('work');
    const id = req.params.minionsId;
    const workAtMinion = works.filter(work => work.minionId === id);
    res.status(200).send(workAtMinion)
})

workRouter.post('/', (req, res, next) => {
    req.body.minionId = req.params.minionsId
    workPosted = addToDatabase('work', req.body);
    res.status(201).send(workPosted)
})

workRouter.put('/:workId', (req, res, next) => {
    const WorkUpdated = updateInstanceInDatabase('work', req.body)
    res.status(200).send(WorkUpdated);
})

workRouter.delete('/:workId', (req, res, next) => {
    deleteFromDatabasebyId('work', req.id);
    res.status(204).send()
})
















module.exports = workRouter;