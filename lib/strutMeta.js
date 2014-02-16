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
    this.rawInputAttributes = {};
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

    this.prototype.attributeDefinitions[name] = options;

    Object.defineProperty(this.prototype, name, {
      get: function () {
        return this.attributes[name] || undefined;
      },

      set: function (value) {
        if (!(this.validateAttribute(name))) {
          throw new TypeError('Could not validate attribute: ' + name);
          return null;
        }

        //Class representations of values after filters have been run (filters not operational yet)
        this.attributes[name] = value;
        return value;
      },
    });
  };

  /**
   * Returns true if a parameter value is valid
   * @method validateAttribute
   * @param {string} name Parameter name to check
   * @returns {boolean}
   * @memberof StrutMeta.prototype
   */
  StrutMeta.prototype.validateAttribute = function validateAttribute(name) {
    var TypeClass = null;
    var definition = null;

    if ('string' !== type(name)) {
      return false;
    }
    if (!(name in this.attributeDefinitions)) {
      return false;
    }

    definition = this.attributeDefinitions[name];

    if ('type' in definition) {
      try {
        TypeClass = require('./types/' + definition.type);
      } catch (e) {
        return false;
      }
    }

    if (null !== TypeClass) {
      typeInstance = new TypeClass();
      if (false === typeInstance.isValid(this.attributes[name])) {
        return false;
      }
    }
    return true;
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
   * Sets the value of a certain attribute
   * @method set
   * @param {string} name
   * @param {string} value
   * @memberof StrutMeta.prototype
   */
  StrutMeta.prototype.set = function set(name, value) {
    return this[name] = value;
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