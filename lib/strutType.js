(function () {
  'use strict';

  /**
   * An abstract definition for a type
   * @abstract
   * @exports StrutType
   * @class StrutType
   * @returns {object} StrutType
   */
  function StrutType() {
    this.typeName = 'Abstract';
  }

  /**
   * Gets the typeName of this type
   * @method get
   * @memberof StrutType.prototype
   * @returns {string|number|boolean|object|array} Value of stored type
   */
  StrutType.prototype.get = function isValid() {
    return this.typeName;
  };

  /**
   * Is valid returns a boolean response if the input validated against the type
   * @method isValid
   * @param {string|number|boolean|object|array} value
   *   the value that should be validated
   * @returns {boolean} Boolean value if the type test passed
   * @memberof StrutType.prototype
   */
  StrutType.prototype.isValid = function isValid(value) {
    return true;
  };

  module.exports = StrutType;

}());