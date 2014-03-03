(function () {
  'use strict';

  var StrutType = require('../strutType');
  var inherits = require('inherits');

  /**
   * @exports StringType
   * @augments StrutType
   * @constructor
   */
  function StringType() {
    this.typeName = 'string';
  }

  inherits(StringType, StrutType);

  module.exports = StringType;

}());