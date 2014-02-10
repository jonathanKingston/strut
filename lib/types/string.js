(function () {

  var StrutType = require('../strutType');
  var inherits = require('inherits');

  /**
   * @augments StrutType
   * @exports StringType
   * @class
   */
  var StringType = function StringType(value) {
    this.value = value;
    this.typeName = 'string';
  };

  inherits(StringType, StrutType);

  module.exports = StringType;

}());