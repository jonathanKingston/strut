(function () {
  'use strict';

  var StrutType = require('../strutType');
  var inherits = require('inherits');
  var type = require('component-type');

  /**
   * @augments StrutType
   * @exports BooleanType
   * @class
   */
  function BooleanType() {
    this.typeName = 'boolean';
  }

  inherits(BooleanType, StrutType);

  BooleanType.prototype.isValid = function isValid(value) {
    if (type(value) === 'boolean') {
      return true;
    }
    return false;
  };

  module.exports = BooleanType;

}());