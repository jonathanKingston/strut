(function () {
  'use strict';

  var StrutType = require('../strutType');
  var inherits = require('inherits');

  /**
   * @augments StrutType
   * @exports StringType
   * @class
   */
  function StringType() {
    this.typeName = 'string';
  }

  inherits(StringType, StrutType);

  module.exports = StringType;

}());