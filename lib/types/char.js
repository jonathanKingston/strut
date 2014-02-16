(function () {
  'use strict';

  var StrutType = require('../strutType');
  var inherits = require('inherits');

  /**
   * @augments StrutType
   * @exports CharType
   * @class
   */
  function CharType() {
    this.typeName = 'char';
  }

  inherits(CharType, StrutType);

  module.exports = CharType;

}());