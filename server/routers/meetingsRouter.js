const express = require('express');
const meetingsRouter = express.Router();

const {
    createMeeting,
    getAllFromDatabase,
    addToDatabase,
    deleteAllFromDatabase,
} = require('../db')

meetingsRouter.get('/', (req,res, next) => {
    const meetings = getAllFromDatabase('meetings');
    res.status(200).send(meetings);
})

meetingsRouter.post('/', (req, res,next)=> {
    const meeting = createMeeting()
    const addedMeeting = addToDatabase('meetings', meeting);
    res.status(201).send(addedMeeting);
})

meetingsRouter.delete('/', (req, res, next) => {
    deleteAllFromDatabase('meetings')
    res.status(204).send()
})


module.exports = meetingsRouter;