(function () {
  'use strict';

  var type = require('component-type');

  /**
   * Builds a base StrutMeta class
   * @exports StrutMeta
   * @param {object} attributeValues Initialisation atributes object
   * @class StrutMeta
   * @returns {object} StrutMeta instance
   */
  function StrutMeta(attributeValues) {
    this.attributes = {};
    this.rawInputAttributes = {};
    this.setAttributes(attributeValues);
  }

  /**
   * Specifies new attribute and specify types
   * @method has
   * @param {string} name Key name for parameter
   * @param {object} options Configuration for parameter
   * @memberof StrutMeta
   * @returns {undefined} No return specified
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
        }

        //Class representations of values
        //after filters have been run (filters not operational yet)
        this.attributes[name] = value;
        return value;
      }
    });
  };

  /**
   * Returns true if a parameter value is valid
   * @method validateAttribute
   * @param {string} name Parameter name to check
   * @returns {boolean} Boolean check for if attribution is true
   * @memberof StrutMeta.prototype
   * @returns {boolean} Boolean Indicates validation success
   */
  StrutMeta.prototype.validateAttribute = function validateAttribute(name) {
    var TypeClass = null;
    var definition = null;
    var typeInstance;

    if (type(name) !== 'string') {
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

    if (TypeClass !== null) {
      typeInstance = new TypeClass();
      if (typeInstance.isValid(this.attributes[name]) === false) {
        return false;
      }
    }
    return true;
  };

  /**
   * Gets the value of a certain attribute
   * @method get
   * @param {string} name Name of attrubute to get
   * @memberof StrutMeta.prototype
   * @returns {string|object|array|number} Value stored for attribute
   */
  StrutMeta.prototype.get = function get(name) {
    return this[name];
  };

  /**
   * Sets the value of a certain attribute
   * @method set
   * @param {string} name Key name of attributes to set
   * @param {string} value Value to set specified value to
   * @memberof StrutMeta.prototype
   * @returns {string|object|array|number} Value stored for attribute
   */
  StrutMeta.prototype.set = function set(name, value) {
    this[name] = value;
    return this[name];
  };

  /**
   * Sets multiple attributes to the class
   * @method setAttributes
   * @param {object} attributes Attributes which are added to the instance.
   * @memberof StrutMeta.prototype
   * @returns {object} attributes
   */
  StrutMeta.prototype.setAttributes = function setAttributes(attributes) {
    var that = this;
    if (type(attributes) === 'object') {
      Object.keys(attributes).forEach(function (key) {
        that[key] = attributes[key];
      });
    }

    return attributes;
  };

  module.exports = StrutMeta;

}());