(function () {

  var BooleanType = require('../../lib/types/boolean');
  var assert = require('chai').assert;

  describe('BooleanType', function(){

    it('Able to define BooleanTypes', function () {
      var myBoolean = new BooleanType(true);
      assert.typeOf(myBoolean, 'object', 'Check to see returned type is an object');
    });

    it('Should be valid when boolean types are passed in', function () {
      var myBoolean = new BooleanType();
      assert.typeOf(myBoolean, 'object', 'Check to see returned type is an object');
      assert.isTrue(myBoolean.isValid(true), 'Check to see if isValid returns true');

      var myBoolean2 = new BooleanType();
      assert.isTrue(myBoolean2.isValid(false), 'Check to see if isValid returns true');

      var myBoolean3 = new BooleanType();
      assert.isFalse(myBoolean3.isValid('fail'), 'Check to see if isValid returns false');

      var myBoolean4 = new BooleanType();
      assert.isFalse(myBoolean4.isValid(12), 'Check to see if isValid returns false');
    });

  });


}());