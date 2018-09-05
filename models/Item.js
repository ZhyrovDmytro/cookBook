const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const multer = require('multer');
// Instructions Schema
const InstructionsSchema = new Schema({ name: [{}] });

// Item Schema
const ItemSchema = new Schema({
    dishName: {
        type: String,
        required: true
    },
    cookTime: {
        type: String
    },
    prepareTime: {
        type: String
    },
    totalTime: {
        type: String,
        required: true
    },
    ingredient: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
    },
    instructions: {
        type: String,
        required: true
    },
    img: {
        type: [Schema.Types.Mixed],
        data: Buffer
    },
    canvasUrl: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Item = mongoose.model('Item', ItemSchema);