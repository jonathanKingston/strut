(function () {
  'use strict';

  var StrutMeta = require('./strutMeta');
  var allot = require('allot');

  /**
   * Builds a strut meta class
   * @namespace Strut
   * @exports Strut
   * @class StrutMeta Strut
   * @returns {object} StrutMeta
   */
  var Strut = function () {
    function StrutInstance(attributeValues) {
      this.attributes = {};
      this.setAttributes(attributeValues);
    }
    
    allot.inherits(StrutInstance, StrutMeta);


    StrutInstance.prototype.attributeDefinitions = {};

    return StrutInstance;
  };

  module.exports = Strut;

}());