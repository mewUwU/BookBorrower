const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;
const Course = new Schema({
    name: String,
    description: String,
    image: String,
    video: String,
    slug: {type: String, slug: 'name', unique: true},
}, {
    timestamps: true,
});

//Plugins
mongoose.plugin(slug);
Course.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: 'all'});

module.exports = mongoose.model('Course', Course);