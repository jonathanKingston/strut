(function () {

  var StrutType = require('../strutType');
  var inherits = require('inherits');
  var type = require('component-type');

  /**
   * @augments StrutType
   * @exports BooleanType
   * @class
   */
  var BooleanType = function BooleanType() {
    this.typeName = 'boolean';
  };

  inherits(BooleanType, StrutType);

  BooleanType.prototype.isValid = function isValid(value) {
    if ('boolean' === type(value)) {
      return true;
    }
    return false;
  };

  module.exports = BooleanType;

}());