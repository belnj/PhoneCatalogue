//To handle incoming request to /phones
var express = require('express');
var router = express.Router();
var fs = require('fs');
const fetch = require('node-fetch');


// Phone BD Model
const Phone = require('../models/phone');

// Get all phones
router.get('/', async (req, res) => {
    const phones = await Phone.find();
    res.json(phones);
})

// Create a new phone
router.post('/', async (req, res) => { 
    //required data missed
    if(!req.body.name || !req.body.manufacturer || !req.body.description){
        res.sendStatus(400);
    }

    if(req.body.imageUrl){
        const url = req.body.imageUrl;
        //ImageFileName must be unique
        req.body.imageFileName=req.body.imageFileName+'.jpg'

        async function download() {
            const response = await fetch(url);
            const buffer = await response.buffer();
            fs.writeFile(`./public/images/${req.body.imageFileName}`, buffer, () => 
              console.log('finished downloading!'));
        }
        
        download()
    }
    
    await Phone.create(req.body);
    res.sendStatus(201);
});
  
// Get a phone by id
router.get('/:id', async (req, res) => {
    try{
        const phones = await Phone.findById(req.params.id);
        res.json(phones);
    } catch (err) {
        res.sendStatus(404); //for some error like an unknown id
    }  
})
  
// Update a phone by id
router.put('/:id', async (req, res) => {
    
    try{
        const updatePhone = await Phone.findByIdAndUpdate(req.params.id, req.body);
        res.sendStatus(204);
    }catch(err){
        res.sendStatus(404); //for some error like an unknown id
    }
    
});
  
// Delete a phone by id
router.delete('/:id', async (req, res) => {
    try{
        await Phone.findByIdAndRemove(req.params.id);
        res.sendStatus(204);
    }catch(err){
        res.sendStatus(404);
    }
});

module.exports = router;