(function () {

  var StrutType = require('../strutType');
  var inherits = require('inherits');

  /**
   * @augments StrutType
   * @exports CharType
   * @class
   */
  var CharType = function CharType(value) {
    this.value = value;
    this.typeName = 'char';
  };

  inherits(CharType, StrutType);

  module.exports = CharType;

}());