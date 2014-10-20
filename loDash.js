var _ = require('lodash');

/*
_.some(collection, [callback=_.identity], [thisArg])

Checks if the callback returns a truthy value for **any** element
of a collection. The function returns as soon as it finds a
passing value and does not iterate over the entire collection.
The callback is bound to thisArg and invoked with three arguments;
(value, index|key, collection).

If a property name is provided for callback the created "_.pluck"
style callback will return the property value of the given element.

If an object is provided for callback the created "_.where" style
callback will return true for elements that have the properties of
the given object, else false.

Aliases

_.any

Arguments

collection (Array|Object|string): The collection to iterate over.
[callback=_.identity] (Function|Object|string): The function called
per iteration. If a property name or object is provided it will be
used to create a ".pluck" or ".where" style callback, respectively.
[thisArg] (*): The this binding of callback.
Returns

(boolean): Returns true if any element passed the callback check,
else false.
*/

_.some([null, 0, 'yes', false], Boolean);


var characters = [
  { 'name': 'barney', 'age': 36, 'blocked': false },
  { 'name': 'fred',   'age': 40, 'blocked': true }
];

// using "_.pluck" callback shorthand
_.some(characters, 'blocked');
// → true

// using "_.where" callback shorthand
_.some(characters, { 'age': 1 });
// → false
