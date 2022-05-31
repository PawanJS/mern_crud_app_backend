let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let carSchema = new Schema(
  {
    dealer: {
      type: 'String',
    },
    brand: {
      type: 'String',
    },
    model: {
      type: 'String',
    },
    color: {
      type: 'String',
    },
    price: {
      type: 'Number',
    },
  },
  { collection: 'car' }
);

module.exports = mongoose.model('car', carSchema);
