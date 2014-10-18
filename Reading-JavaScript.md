### 1

```javascript
if (typeof args[i] === 'string') {
```

* Symbol: if
* Type: Keyword
* Name: "if"
* Meaning: Conditional

* Symbol: typeof
* Type: Operator
* Name: "typeof"
* Meaning: returns the type of a variable or expression

* Symbol: args
* Type: Operand
* Name: "array args"
* Meaning: Name of array

* Symbol: [ ]
* Type: Literal
* Name: Array
* Meaning: Array

* Symbol: i
* Type: index number
* Name: array index
* Meaning: position of an element in an array

* Symbol: ===
* Type: Operator
* Name: "semicolon", "statement operator"
* Meaning: End the statement
* Operands: args[i] === 'string'

* Symbol: 'string'
* Type: Type Literal
* Name: "string string"
* Meaning: Create a literal String value containing "string"

### 2

```javascript
var valid = SYMBOLS + '12345678/';
```

* Symbol: var
* Type: Keyword
* Name: "var"
* Meaning: Create an identifier
* Operands: valid

* Symbol: valid
* Type: Identifier
* Name: "variable valid"
* Meaning: Variable to hold a value.

* Symbol: =
* Type: Operator
* Name: "is assigned"
* Meaning: Store the value to the right in the identifier on the left
* Operands: valid, SYMBOLS

* Symbol: SYMBOLS, '12345678/'
* Type: Type Literals
* Name: "string SYMBOLS", "string 12345678/"
* Meaning: Create a reference SYMBOL to a String value; Create a literal String value 12345678/

* Symbol: +
* Type: Operator
* Name: concatenation operator
* Meaning: Adds two or more string variables together

### 3

```javascript
if (path.existsSync('loaded.json')) {
  var loadedFile = fs.readFileSync('loaded.json');
  var loaded = JSON.parse(loadedFile);
  for (var key in loaded.success) {
    idBucket[key] = true;
  }
}
```

* Conditional if statement with { block }
* `path` is an object with method existsSync that passes in a JSON file
* `fs`is a built-in Node I/O synchronous function that reads the JSON file and assigns the resulting string to `loadedFile`
* `JSON.parse()` method parses the `loadedFile` JSON and assigns the resulting string to variable `loaded`
* for-in loop iterates over the JSON Object for all elements that were successfully parsed and assigns Boolean of true to a 1-D array `idBucket`

### 4

```javascript
for (var key in loaded.success) {
  data = loaded.success[key];
  newData = {
    Address: {},
    location: {},
    LegacyData: {}
  };
```

* for-in loop with variable `key` iterates over the JSON Object for all elements that were successfully parsed
* Variable `data` is an object/array of parsed JSON strings
* `newData` is an object literal with 3 empty object properties: Address, location, LegacyData  

### 5

```javascript
var mapped_fields = {
  Address: {
    address1: true,
    address2: true,
    city: true,
    state: true,
    postalCode: true
  },
```
* `mapped_fields` is an object literal with 5 object properties, where the value is a Boolean

### 6

```javascript
// temporary redirect from sheltr.org to philly.sheltr.org
function phillyRedirect() {
  return function(req, res, next) {
    res.writeHead(301, {'Location': 'http://philly.sheltr.org'});
    return res.end();
  };
};
```

* `phillyRedirect` is a function acting as a listener in Node that redirects an http request
* it returns a function that passes in an http request/response then uses Node's writeHead( ) funciton to send a response header to http://philly.sheltr.org, when the incoming http request is http://sheltr.org

### 7

```javascript
var settings = {
        // The class that wraps each header. Used as a clipping mask.
        headerClass: 'midnightHeader',
        // The class that wraps the contents of each header. Also used as a clipping mask.
        innerClass: 'midnightInner',
        // The class used by the default header (useful when adding multiple headers with different markup).
        defaultClass: 'default',
      };

  (...)
  for( headerClass in headers ) {
          if( typeof headers[headerClass].element === 'undefined' ) {

            // Create the outer clipping mask
            // If there's some custom markup, use it, or else just clone the default header
            var $existingHeader = $customHeaders.filter('.'+headerClass);
            if( $existingHeader.length ) {
              headers[headerClass].element = $existingHeader;
            } else {
              headers[headerClass].element = $defaultHeader.clone(true, true).removeClass( settings['defaultClass'] ).addClass(headerClass).appendTo( $originalHeader );
            }
};
```

* `settings` is an object literal with 3 object properties, all of which contain string names of CSS classes
* for-in loop with object `headerClass` iterates over an obect/array `headers`
* Conditional if statement uses dot notation to determine the type of each element in the headers object/array based on the `headerClass` key
* for an undefined element in headers, jQuery variable object/array `$existingHeader` is assigned one or more `$customerHeaders` values that has CSS class value of headerClass per the .filter( ) method
* if the length of `$existingHeader` array is greater than 0, then the previously undefined headers[headerClass].element is assigned $existingHeader, else jQuery variable `$defaultHeader` is cloned and operated on via a chain of three methods: .removeClass ( ), .addClass( ) and .appendTo( ). These three first remove the default class, then add the headerClass passed in via the for-in loop, and then append the cloned defaultHeader to the originalHeader. The resulting string is than assigned to the requisite key'ed element of the headers array.

### 8

```javascript
// Reset the header status
        for( ix in headers ) {
          // from == '' signals that the section is inactive
          headers[ ix ].from = '';
          headers[ ix ].progress = 0.0;
        }
```
* for-in loop with variable `ix` iterates over object `headers` and assigns values to 2 properties: from and progress.
* from is assigned the empty string and progress is assigned a floating point number of 0.0

### 9

```javascript
// We need to recalculate all sections and headers on resize.
      $(window).resize(function(){
        recalculateSections();
        updateHeaderHeight();

        recalculateHeaders();
        updateHeaders();
      }).trigger('resize');
```
* window object uses .resize( ) function to resize within the browser window specific page elements based on what is returned from calling 4 named functions
* Uses the jQuery .trigger( ) function to trigger the resize event once all functions have been called

### 10

```javascript
  var allIntroSteps = [];
```

* Variable: `allIntroSteps` (array)
* Value: empty array

### 11

```javascript
var temp = {};
      for (var key in object) {
          temp[key] = _cloneObject(object[key]);
      }
```

* Variable: `temp` (object)
* for-in loop where key-value pairs of the object are being looped through

### 12

```javascript
 if (this._options.showButtons === false) {
        buttonsLayer.style.display = 'none';
 }
```

* if showButtons property of the object is false (bolean), then hide DOM element buttonsLayer

### 13

```javascript
 for (var i = 0, elmsLength = allIntroSteps.length; i < elmsLength; i++) {
        var currentElement = allIntroSteps[i];
        var step = parseInt(currentElement.getAttribute('data-step'), 10);
```
* for loop - loops through an array of DOM elements
* Variable: `currentElement` is set to the current DOM element
* Variable: `step` - parseInt converts the first argument to a string, parses it, and returns an integer

### 14

```javascript
  if ((targetOffset.height + targetOffset.top + tooltipHeight) > windowSize.height) {
      _removeEntry(possiblePositions, "bottom")
  }
```
* if statement that adds height values and compares to the windowsSize height. If sum is greater, removes space below

### 15

```javascript
  while (true) {
    if (typeof introItems[nextStep] == 'undefined') {
        break;
    } else {
        nextStep++;
    }
  }
```
* while loop - loops while condition is true
* if array element introItems[nextStep] is typeof undefined, then break the loop, else increment nextStep by 1

### 16

```javascript
  if (typeof exports === 'object') {
    // CommonJS
    factory(exports);
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['exports'], factory);
  } else {
    // Browser globals
    factory(root);
  }
```

* Conditional if/elseif
* typeof operator - if operand (exports) is an object, then pass the object into the function factory()
* typeof operator - if operand (define) is a function and that function has an anonymous module, then pass 2 arguments: export object and factory function into the define function

### 17

```javascript
  introItems.sort(function (a, b) {
    return a.step - b.step;
  });

```
* `introItems` is an array whose elements are sorted in ascending order via the array sort function

### 18

```javascript
var maxHeight = 0;
```

* Variable: `maxHeight` (integer)
* Value: Number 0

### 19

```javascript
var totalProgress = 0.0;
```

* Variable: `totalProgress` (floating point)
* Value: Number 0.0

### 20

```javascript
var lastActiveClass = '';
```

* Variable: `lastActiveClass` (string)
* Value: [empty string]

### 21

```javascript
var hasAnyClass = false;
```

* Variable: `hasAnyClass` (boolean)
* Value: 0

### 22

```javascript
var prefixes = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' ');
for(var i = 0; i < prefixes.length; i++) {
```

* Variable: `prefixes`
* Value: comma-delimited list = transform,WebkitTransform,MozTransform,OTransform,msTransform
* Variable: `i` (integer)
* Value: Number 0

### 23

```javascript
var headerHeight = headerInfo.height;
```

* Variable: `headerHeight` (integer)
* Value: fixed height of the header of the active document

### 24

```javascript
maxHeight = (height > maxHeight) ? height : maxHeight;
```

* Variable: `maxHeight` (integer)
* Variable: `height` (integer)
* Value: `maxHeight` value is computed: If value of height is greater than the value of maxHeight, then set maxHeight = height, else set maxHeight to maxHeight.

### 25

```javascript
var sections = [];
```

* Variable: `sections` (array)
* Value: null

### 26

```javascript
var $header = $(this);
```

* Variable: `$header` (object)
* Value: a jquery reference to a header element, such as h1, h2, etc.

### 27

```javascript
var defaultPaddings = {
          top: $originalHeader.css("padding-top"),
          right: $originalHeader.css("padding-right"),
          bottom: $originalHeader.css("padding-bottom"),
          left: $originalHeader.css("padding-left")
};
```

* Variable: `defaultPaddings` (object)
* Value: an object with 4 properties that get the padding of the originalHeader

### 28

```javascript
multiples = [1, 2, 2.5, 5, 10];
```

* Variable: multiples
* Value: array [1, 2, 2.5, 5, 10]
* Integers: 1, 2, 5, 10
* Floats: 2.5

### 29

```javascript
defaultPrevented = true
```

* Variable: defaultPrevented
* Value: Boolean true

### 30

```javascript
updateShadows: function (key, value)
```

* Variable: updateShadows
* Value: function
* Arguments: (key, value)

### 31

```javascript
function pick() {
	var args = arguments,
		i,
		arg,
		length = args.length;
```

* Variable: pick
* Value: function ()
* Variable: args
* Value: Arguments (i, arg, length = args.length)

### 32

```javascript
for (i = 0; i < length; i++) {
	arg = args[i];
```

* Loops: for loop
* Variable: i
* Operators: =, <, ++
* (start at 0, end when i < args.length, increment i)

### 33

```javascript
interval *= magnitude;
```

* Variable: interval, magnitude
* Value: interval = interval * magnitude

### 34

```javascript
if (this instanceof Bro) {
  this.obj = obj;
  } else {
   return new Bro(obj);
  }
}
```

* Conditional: if
* Condition: instanceof of the Bro object
* Statement: this.obj = obj;
* Returns a newly created instance of Bro if one does not already exist

### 35

```javascript
var assert = require('assert');
```

* Variable: assert
* Value: require('assert')
* (call 'assert' from library)

### 36

```javascript
if (container.chartistSvg !== undefined)
```
* Conditional: if
* Condition: container.chartistSvg !== (not equal to) undefined

### 37

```javascript
var array = [];
```

* Variable: array
* Value: [];

### 38

```javascript
if (dataArray[i][j] > highLow.high) {
            highLow.high = dataArray[i][j]
```

* Conditional: if
* Condition: (dataArray[i][j] > highLow.high)
* Statement: highLow.high = dataArray[i][j]
* Multi-dimensional Array: dataArray[i][j]

### 39

```javascript
while (true) {
        var length = Chartist.projectLength(svg, bounds.step / 2, bounds, options);
        if (length >= options.axisY.scaleMinSpace) {
          bounds.step /= 2;
        } else {
          break;
        }
      }
```

* Loop: While
* Condition: true
* End loop: break if condition evaluates false;
* Conditional: if
* Condition: length >= options.axisY.scaleMinSpace
* bounds.step = bounds.step/2

### 40

```javascript
 if(toTheRight && direction === 'explode' ||
          !toTheRight && direction === 'implode') {
          return 'start';
```

* Conditional: if
* Conditions: toTheRight && direction === 'explode' || !toTheRight && direction === 'implode'
* Boolean Logical Operators:! (not) && (and) || (or)
* Statement: return 'start'

### 41

```javascript
//the parent's constructor function is stored
Person.prototype.init = function(name) {
    this.name = name;
}
```
* Symbol: =
* Type: Operator
* Name: "is assigned"
* Meaning: Assigns an anonymous function on the right to the identifier on the left
*

### 42

```javascript
Employee.prototype = new Person();
```

* Symbol: =
* Type: Operator
* Name: "is assigned"
* Meaning: Assigns an instance of the Person object on the right to the Employee constructor on the left

### 43

```javascript
Employee.prototype.constructor = Employee;
```
* Symbol: =
* Type: Operator
* Name: "is assigned"
* Meaning: Assigns an Employee object on the right to the Employee object constructor on the right


### 44

```javascript
Employee.constructor = Person.prototype.constructor;
```

* Symbol: =
* Type: Operator
* Name: "is assigned"
* Meaning: Assigns the Person constructor on the right to the Employee constructor on the left

### 45

```javascript
Manager.prototype = new Employee;
```
* Symbol: =
* Type: Operator
* Name: "is assigned"
* Meaning: Assigns an instance of the Employee on the right to the Manager constructor on the left

### 46

```javascript
Rectangle.prototype.area = function () {
  return this.x * this.y;
}
```
* Symbol: =
* Type: Operator
* Name: "is assigned"
* Meaning: Assigns an anonymous function on the right to the `area` method in the Rectangle constructor on the left

### 47

```javascript
var alice = new Person('Alice', 26);
```
* Symbol: var
* Type: Keyword
* Name: "var"
* Meaning: Create an identifier
* Operands: alice

* Symbol: alice
* Type: Identifier
* Name: "variable alice"
* Meaning: Variable to hold a value.

* Symbol: =
* Type: Operator
* Name: "is assigned"
* Meaning: Assigns an instance of the Person object to the operand `alice` on the left

### 48

```javascript
// extend Parent’s prototype to define a 'sayHello' method
Parent.prototype.sayHello = function(){
    console.log('Hello');
};
```

* Symbol: =
* Type: Operator
* Name: "is assigned"
* Meaning: Assigns an anonymous function on the right to the `sayHello` method in the Parent constructor on the left  

### 49

```javascript
// extend Child's prototype to define an 'otherVar' property...
Child.prototype.otherVar = 'otherValue';
```

* Symbol: =
* Type: Operator
* Name: "is assigned"
* Meaning: Assigns the value of a string on the right to the `otherVar` property of the Child constructor

### 50

```javascript
// ... but then set the Child's prototype to the Parent prototype
// (whose prototype doesn’t have any 'otherVar' property defined,
//  so the Child prototype no longer has ‘otherVar’ defined!)
Child.prototype = Object.create(Parent.prototype);
```

* Symbol: =
* Type: Operator
* Name: "is assigned"
* Meaning:
