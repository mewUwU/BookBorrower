const Course = require('../models/Course');
const {mutipleMongooseObject} =require('../../util/mongoose');

class MeController {

    //get me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
        .then(courses => res.render('me/stored-courses', {
            courses: mutipleMongooseObject(courses)
        } ) )
        .catch(next);
    }

    trashCourses(req, res, next) {
        Course.findDeleted({})
        .then(courses => res.render('me/trash-courses', {
            courses: mutipleMongooseObject(courses)
        } ) )
        .catch(next);
    }

}

module.exports = new MeController;