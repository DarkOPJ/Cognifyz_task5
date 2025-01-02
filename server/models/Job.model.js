const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const jobSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    company: {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        contactEmail: {
            type: String,
            required: true
        },
        contactPhone: {
            type: String,
            required: true
        }
    },
    datePosted: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Job', jobSchema);