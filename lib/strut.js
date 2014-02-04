(function () {

  var StrutMeta = require('./strutMeta');
  var StrutUtils = require('./strutUtils');

  /**
   * Builds a strut meta class
   * @namespace Strut
   * @exports Strut
   * @class StrutMeta Strut
   * @returns StrutMeta
   */
  var Strut = function () {
    var StrutInstance = StrutUtils.extend(StrutMeta);
    return StrutInstance;
  };

  module.exports = Strut;

}());