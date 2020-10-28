const router = require('express').Router();
let House= require('../models/House')


router.get('/', (req, res) => {
    House.find()
        .then( house=> res.json(house))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.post('/addHouse', (req, res)=>{
    console.log(req.body)
    const title = req.body.title;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl
    const price = req.body.price;
    const adress = req.body.adress;
    
    const startDate = req.body.startDate;
    const endDate = req.body.endDate;
    
    const newHouse = new House({
        title,
        description,
        imageUrl,
        price,
        adress,
        startDate,
        endDate
    });
    console.log(newHouse)
    newHouse.save()
        .then(() => res.json('new House added'))
        .catch(err => res.status(400).json('Err ' + err))
})

module.exports = router;