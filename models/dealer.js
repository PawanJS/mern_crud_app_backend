let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let dealerSchema = new Schema(
  {
    name: {
      type: 'String',
    },
    quantity: {
      type: 'Number',
    },
    longitude: {
      type: 'Number',
    },
    latitude: {
      type: 'Number',
    },
    total: {
      type: 'Number',
    },
    remaining: {
      type: 'Number',
    },
    ownerFirstName: {
      type: 'String',
    },
    ownerLastName: {
      type: 'String',
    },
  },
  { collection: 'dealer' }
);

module.exports = mongoose.model('dealer', dealerSchema);
