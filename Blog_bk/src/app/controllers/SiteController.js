const Course = require('../models/Course');
const {mutipleMongooseObject} =require('../../util/mongoose');

class SiteController {

    index(req, res, next) {
        Course.find({})
        .then(courses => {
            res.render('home',{
                courses: mutipleMongooseObject(courses)
            });
        })
        .catch(next);
    }

    search(req, res) {
       res.render('search');
    }
}

module.exports = new SiteController;