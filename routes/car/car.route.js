let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

//* Student Model
let studentSchema = require('../../models/car');

//* Create Car
router.route('/create-car').post((req, res, next) => {
  studentSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

//* Read Car
router.route('/').get((req, res, next) => {
  studentSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//* Get single car
router.route('/edit-car/:id').get((req, res, next) => {
  studentSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//* Update car
router.route('/update-car/:id').put((req, res, next) => {
  studentSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        console.log(error);
        return next(error);
      } else {
        res.json(data);
        console.log('car Updated Successfully!');
      }
    }
  );
});

//* Delete Student
router.route('/delete-car/:id').delete((req, res, next) => {
  studentSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({ msg: data });
    }
  });
});

module.exports = router;
