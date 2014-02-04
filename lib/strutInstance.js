(function () {

  var crock = require('crock');

  /**
   * Builds a base StrutInstance class
   * @exports StrutInstance
   * @param {object} attributeValues
   * @class StrutInstance
   */
  var StrutInstance = function StrutInstance(attributeValues) {
    this.attributes = {};
    this.setAttributes(attributeValues);
  };

  /**
   * Gets the value of a certain attribute
   * @method has
   * @param {string} name
   * @memberof StrutInstance.prototype
   */
  StrutInstance.prototype.get = function (name) {
    return this.attributes[name];
  };

  /**
   * Sets multiple attributes to the class
   * @method setAttributes
   * @param {object} attributes
   * @memberof StrutInstance.prototype
   * @returns attributes
   */
  StrutInstance.prototype.setAttributes = function setAttributes(attributes) {
    var that = this;

    if ('object' === crock.typeOf(attributes)) {
      Object.keys(attributes).forEach(function (key) {
        that.attributes[key] = attributes[key];
      });
    }

    return attributes;
  };


  module.exports = StrutInstance;

}());