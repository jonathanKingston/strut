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

  });

}());

