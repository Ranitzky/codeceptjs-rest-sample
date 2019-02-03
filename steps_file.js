const assert = require('assert');

// in this file you can append custom step methods to 'I' object

module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    status: function (response, code) {
      assert(response.status == code, "Status Code " + response.status + "received, but " + code + " expected.");
    }

  });
}
