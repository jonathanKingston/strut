(function () {

  var Strut = require('../lib/strut');
  var assert = require('chai').assert;

  describe('strutMeta', function(){

    var Person = new Strut();

    Person.has('firstName', {
      type: 'string'
    });

    Person.has('lastName', {
      type: 'string'
    });

    it('should be able to create an instance', function() {
      var staffMember = new Person({
        firstName: 'Jonathan',
        lastName: 'Kingston'
      });

      assert.isObject(staffMember, 'Instance is an object');

    });

    it('should be able to get values from an instance', function() {
      var staffMember = new Person({
        firstName: 'Jonathan',
        lastName: 'Kingston'
      });

      assert.isFunction(staffMember.get, 'Check get is actually a function on the instance that we can use');

      assert.isString(staffMember.get('firstName'), 'Check can get value');

      assert.strictEqual(staffMember.get('firstName'), 'Jonathan', 'Check can get value and is the same as expected');

    });

    it('should return undefined for types that are not valid', function () {
      var Digger = new Strut();

      Digger.has('engineSize', {
        type: 'engineSizeometerType'
      });

      Digger.has('type', {
        type: 'string'
      });

      var dugger = new Digger({
        engineSize: 12,
        type: 'OneWithABigSpade'
      });

      assert.strictEqual(dugger.type, 'OneWithABigSpade', 'Check an valid type returns as expected');
      assert.isUndefined(dugger.engineSize, 'Check an invalid type returns as undefined');
    });

    it('should validate isValid when valid inputs are passed', function () {
      var Barrel = new Strut();
      Barrel.has('beerName', {
        type: 'string'
      });

      var keg = new Barrel({
        beerName: 'Guinness'
      });

      assert.isTrue(keg.isValid());
    });

  });

}());

