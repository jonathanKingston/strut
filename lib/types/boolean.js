(function () {

  var StrutType = require('../strutType');
  var inherits = require('inherits');
  var type = require('component-type');

  /**
   * @augments StrutType
   * @exports BooleanType
   * @class
   */
  var BooleanType = function BooleanType(value) {
    this.value = value;

    this.typeName = 'boolean';
  };

  inherits(BooleanType, StrutType);

  BooleanType.prototype.isValid = function isValid() {
    if ('boolean' === type(this.value)) {
      return true;
    }
    return false;
  };

  module.exports = BooleanType;

}());