# Strut

A simple object base for node.js and plain ol JavaScript.

The packages motives at the moment is to provide similar behavior to Moose from Perl.

## Class definition
```js
var Person = new Strut();

Person.has('firstName', {
  type: 'string'
});

Person.has('lastName', {
  type: 'string'
});
```

## Creating a class instance
```js
var me = new Person({
  'age': 12,
  'firstName': 'Jonathan',
  'lastName': 'Kingston'
});
```
*throws TypeError*

```js
var me = new Person({
  'firstName': 'Jonathan',
  'lastName': 'Kingston'
});
```

`me.get('lastName');`
*Kingston*

## Licence

Copyright (c) 2014 Jonathan Kingston

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Lesser General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Lesser General Public License for more details.

You should have received a copy of the GNU Lesser General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
