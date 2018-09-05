const express = require('express');
const router = express.Router();

// Item Model

const Item = require('../../models/Item');

// @route GET api/items
// @description Det all items
// @access Public

router.get('/', (req, res) => {
    Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items))
});

// @route POST api/items
// @description Create a POST
// @access Public

router.post('/', (req, res) => {
    const {
        dishName,
        cookTime,
        prepareTime,
        totalTime,
        ingredient,
        ingredients,
        instructions,
        img,
        canvasUrl
    } = req.body;

    const newItem = new Item({
        dishName,
        cookTime,
        prepareTime,
        totalTime,
        ingredient,
        ingredients,
        instructions,
        img,
        canvasUrl
    });

    newItem.save()
        .then(item => res.json(item))
});

// @route DELETE api/items/:id
// @description DELETE a item
// @access Public

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
});

module.exports = router;