const checkMillionDollarIdea = (req, res, next) => {
    const {numWeeks, weeklyRevenue} = req.body;
    if (Number(numWeeks) && Number(weeklyRevenue)) {
        const result = Number(numWeeks) * Number(weeklyRevenue);
        if(result >= 1000000) {
            next()
        }else{
            res.status(400).send("Not a million dollar Idea")
        }
    }else {
        res.status(400).send("Bad Request")
    }
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
