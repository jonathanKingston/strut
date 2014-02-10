(function () {

  var BooleanType = require('../../lib/types/boolean');
  var assert = require('chai').assert;

  describe('BooleanType', function(){

    it('Able to define BooleanTypes', function () {
      var myBoolean = new BooleanType(true);
      assert.typeOf(myBoolean, 'object', 'Check to see returned type is an object');
    });

    it('Should be valid when boolean types are passed in', function () {
      var myBoolean = new BooleanType(true);
      assert.typeOf(myBoolean, 'object', 'Check to see returned type is an object');
      assert.isTrue(myBoolean.isValid(), 'Check to see if isValid returns true');

      var myBoolean2 = new BooleanType(false);
      assert.isTrue(myBoolean2.isValid(), 'Check to see if isValid returns true');

      var myBoolean3 = new BooleanType('fail');
      assert.isFalse(myBoolean3.isValid(), 'Check to see if isValid returns false');

      var myBoolean4 = new BooleanType(12);
      assert.isFalse(myBoolean4.isValid(), 'Check to see if isValid returns false');
    });

  });


}());