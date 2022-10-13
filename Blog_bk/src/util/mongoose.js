const { default: mongoose } = require("mongoose");

module.exports = {
    mutipleMongooseObject: function (mongoose) {
        return mongoose.map(mongoose => mongoose.toObject());
    },
    mongooseObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    }
};