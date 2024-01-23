const mongoose = require("mongoose");

const packagesSchema = new mongoose.Schema({

    package_Id: {
        type: String,
        required: true
    },
    destination: {
        type: Array,
        required: true
    },
    des_image:{
        type: Array,
        items: {
            type: String
        },
        required: true
    },
    des_discription: {
        type: String,
        required: true
    },
    source: {
        type: Array,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    includedServices: {
        type: Array,
        items: {
            type: String
        },
        required: true
    },
    itinerary: {
        type: Array,
        items: {
            type: Object,
            properties: {
                day: {
                    type: Number,
                    required: true
                },
                activities: {
                    type: Array,
                    items: {
                        type: String,
                        required: true
                    }
                }
            },
        },
    }
})

module.exports = mongoose.model('Package', packagesSchema);