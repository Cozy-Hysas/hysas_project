const router = require('express').Router();
let house= require('../models/House')


router.get('/', (req, res) => {
    house.find()
        .then( house=> res.json(house))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.post('/addHouse', (req, res)=>{
    const title = req.body.title;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl
    const price = req.body.price;
    const adress = req.body.adress;

    const newHouse = new House({
        title,
        description,
        imageurl,
        price,
        adress
    });
    console.log(newHouse)
    newHouse.save()
        .then(() => res.json('new House added'))
        .catch(err => res.status(400).json('Err ' + err))
})

module.exports = router;