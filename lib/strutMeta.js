(function () {

  /**
   * Builds a base StrutMeta class
   * @exports StrutMeta
   * @class StrutMeta
   */
  var StrutMeta = function StrutMeta() {
  };

  /**
   * Specifies new attribute and specify types
   * @method has
   * @param {string} name
   * @param {object} options
   * @memberof StrutMeta.prototype
   */
  StrutMeta.prototype.has = function has(name, options) {
    var that = this;

    Object.defineProperty(this, name, {
      get: function () {
        return this.prototype.attributes[name] || undefined;
      },

      set: function (value) {
        this.prototype.attributes[name] = value;
        return value;
      },
    });
  };

  module.exports = StrutMeta;

}());