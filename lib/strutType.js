(function () {

  var type = require('component-type');

  /**
   * An abstract definition for a type
   * @abstract
   * @param {string|number|boolean|object|array} value the value that should be validated
   * @exports StrutType
   * @class StrutType
   */
  var StrutType = function StrutType(value) {
    this.value = value;

    this.typeName = 'Abstract';
  };

  /**
   * Gets the typeName of this type
   * @method get
   * @memberof StrutType.prototype
   */
  StrutType.prototype.get = function isValid() {
    return this.typeName;
  };

  /**
   * Is valid returns a boolean response to if the input validated against the type
   * @method isValid
   * @returns {boolean}
   * @memberof StrutType.prototype
   */
  StrutType.prototype.isValid = function isValid() {
    return true;
  };

  module.exports = StrutType;

}());