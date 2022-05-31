let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();

//* Dealer Model
let dealerSchema = require('../../models/dealer');

//* Create Dealer
router.route('/create-dealer').post((req, res, next) => {
  dealerSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      console.log(data);
      res.json(data);
    }
  });
});

//* Read Dealer
router.route('/').get((req, res, next) => {
  dealerSchema.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//* Get single Dealer
router.route('/edit-dealer/:id').get((req, res, next) => {
  dealerSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
});

//* Update Dealer
router.route('/update-dealer/:id').put((req, res, next) => {
  dealerSchema.findByIdAndUpdate(
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
        console.log('Dealer Updated Successfully!');
      }
    }
  );
});

//* Delete Dealer
router.route('/delete-dealer/:id').delete((req, res, next) => {
  dealerSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({ msg: data });
    }
  });
});

module.exports = router;
