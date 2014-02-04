(function () {

  var allot = require('allot');
  var StrutInstance = require('./strutInstance');

  /**
   * @exports StrutUtils
   * @namespace StrutUtils
   */
  var StrutUtils = {
  };

  /**
   * @namespace StrutUtils
   * @param {class} superClass
   * @returns {class} abstractClass
   */
  StrutUtils.extend = function (superClass) {
    var baseClass = StrutInstance;

    var classOutput = allot.factory(superClass, baseClass, {
      staticProxyPrototypes: ['has']
    });

//    TOFIX double inheritance doesn't work here so a mixin needs to be created instead
//    var classOutput = allot.factory(StrutInstance, classOutput, {
//      instanceProxyPrototypes: ['get', 'setAttributes']
//    });
    classOutput.prototype.get = StrutInstance.prototype.get;
    classOutput.prototype.setAttributes = StrutInstance.prototype.setAttributes;

    return classOutput;
  };

  module.exports = StrutUtils;

}());
