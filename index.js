'use strict';

function get() {
  var contract = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
  var network = arguments.length <= 1 || arguments[1] === undefined ? '' : arguments[1];

  contract = contract.toLowerCase();
  network = network.toLowerCase();
  try {
    var res = require('./contracts/' + contract + '.json');
    return res[network];
  } catch (error) {
    throw new Error('Cannot locate contract ' + contract + ' on ' + network + ': ' + JSON.stringify(error));
  }
}

module.exports = { get: get };