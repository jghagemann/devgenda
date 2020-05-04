const { v4: uuidv4 } = require('uuid');

const options = {
  random: [
    0
  ]
}

const uniqueId = uuidv4(options.random);

module.exports = uniqueId;