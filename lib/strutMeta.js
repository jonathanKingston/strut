(function () {

  var type = require('component-type');

  /**
   * Builds a base StrutMeta class
   * @exports StrutMeta
   * @param {object} attributeValues
   * @class StrutMeta
   */
  var StrutMeta = function StrutMeta(attributeValues) {
    this.attributes = {};
    this.setAttributes(attributeValues);
  };

  /**
   * Specifies new attribute and specify types
   * @method has
   * @param {string} name
   * @param {object} options
   * @memberof StrutMeta
   */
  StrutMeta.has = function has(name, options) {
    var valid = true;
    var TypeClass = null;

    if ('type' in options) {
      try {
        TypeClass = require('./types/' + options.type);
      } catch (e) {
        valid = false;
      }
    }

    Object.defineProperty(this.prototype, name, {
      get: function () {
        var typeInstance;
        if (false === valid) {
          return undefined;
        }

        if (null !== TypeClass) {
          typeInstance = new TypeClass(this.attributes[name]);
          if (false === typeInstance.isValid()) {
            return undefined;
          }
        }
        return this.attributes[name] || undefined;
      },

      set: function (value) {
        this.attributes[name] = value;
        return value;
      },
    });
  };

  /**
   * Gets the value of a certain attribute
   * @method get
   * @param {string} name
   * @memberof StrutMeta.prototype
   */
  StrutMeta.prototype.get = function get(name) {
    return this[name];
  };

  /**
   * Gets raw input provided
   */
  StrutMeta.prototype.getInputValue = function getInputValue(name) {
    return this.attributes[name];
  };

  /**
   * Sets multiple attributes to the class
   * @method setAttributes
   * @param {object} attributes
   * @memberof StrutMeta.prototype
   * @returns attributes
   */
  StrutMeta.prototype.setAttributes = function setAttributes(attributes) {
    var that = this;
    if ('object' === type(attributes)) {
      Object.keys(attributes).forEach(function (key) {
        that[key] = attributes[key];
      });
    }

    return attributes;
  };

  module.exports = StrutMeta;

}());