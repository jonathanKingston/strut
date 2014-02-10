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
        if (!(this.validateAttribute(name))) {
          return undefined;
        }
        return this.attributes[name] || undefined;
      },

      set: function (value) {
        //This is a store later for what was input without type modifications
        this.rawInputAttributes = value;

        //Class representations of values after filters have been run (filters not operational yet)
        this.attributes[name] = value;
        return value;
      },
    });
  };

  /**
   * Returns true if all specified parameters are valid
   * @method isValid
   * @returns {boolean}
   * @memberof StrutMeta.prototype
   */
  StrutMeta.prototype.isValid = function isValid() {
    var that = this;
    var valid = true;
    Object.keys(this.attributeDefinitions).forEach(function (attributeName) {
      if (true !== valid) {
        return;
      }

      if (false === that.validateAttribute(attributeName)) {
        valid = false;
      }
    });
    return valid;
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
      typeInstance = new TypeClass(this.attributes[name]);
      if (false === typeInstance.isValid()) {
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
    return this.attributes[name];
  };

  /**
   * Gets raw input provided
   */
  StrutMeta.prototype.getInputValue = function getInputValue(name) {
    if (name in this.attributeDefinitions) {
      return this.rawInputAttributes[name] || undefined;
    }

    // If the parameter isn't specified it won't be caught be the setter method
    // This means we need to just check normal parameters
    return this[name] || undefined;
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