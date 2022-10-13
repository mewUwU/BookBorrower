const Course = require('../models/Course');
const {mongooseObject} =require('../../util/mongoose');

class CoursesController {

    create(req, res, next) {
        res.render('courses/create');
    }

    store(req, res, next) {
        // res.json(req.body);
        const formData = req.body;
        formData.image = `http://i3.ytimg.com/vi/${req.body.video}/hqdefault.jpg`
        const course = new  Course(formData);
        course.save()
            .then(() => res.redirect('/me/stored-courses'))
            .catch(error => {
                
            });
    }

    show(req, res, next) {
Course.findOne({slug: req.param.slug})
        .then(course => {
            res.render('courses/show',  {course: mongooseObject(course)});
        })
        .catch(next);
    }

    edit(req, res, next) {
        Course.findById(req.params.id)
        .then(course => res.render('courses/edit', {
            course: mongooseObject(course)
        }))
        .catch(next);
    }

    update(req, res, next) {
         Course.updateOne({_id: req.params.id}, req.body)
         .then(() => res.redirect('/me/stored-courses'))
         .catch(next);
    }

    delete(req, res, next) {
        Course.delete({_id: req.params.id})
        .then(() => res.redirect('back'))
        .catch(next);
   }
   
   restore(req, res, next) {
    Course.restore({_id: req.params.id})
    .then(() => res.redirect('back'))
    .catch(next);
}

forceDelete(req, res, next) {
    Course.deleteOne({_id: req.params.id})
    .then(() => res.redirect('back'))
    .catch(next);
}
}

module.exports = new CoursesController;