const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dateModel = new Schema({
    fromDay: { type: Date, required: true },
    fromTime: { type: Date, required: true },
    toDay: { type: Date, required: true },
    toTime: { type: Date, required: true },
    description: { type: String, required: true },
    type: { type: String, required: false }
});

mongoose.model('dates', dateModel);

module.exports = dateModel; 