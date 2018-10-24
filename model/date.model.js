const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dateModel = new Schema({
    fromDay: { type: String, required: true },
    fromTime: { type: String, required: true },
    toDay: { type: String, required: true },
    toTime: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: false },
    attendees: [{
                    status: { type: Number, required: true },
                    user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}}] ,
});

const Dates = mongoose.model('date', dateModel);

module.exports = Dates; 