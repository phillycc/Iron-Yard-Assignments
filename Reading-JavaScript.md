**intro.js**

~~~

```javascript
  var allIntroSteps = [];
```

* Variable: `allIntroSteps` (array)
* Value: empty array


~~~

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
* typeof operator - if operand (define) is a function, then pass 2 arguments: export object and factory function into the define function



**midnight.jquery.js**

~~~

```javascript
var maxHeight = 0;
```
 
* Variable: `maxHeight` (integer)
* Value: Number 0
 
~~~

```javascript
var totalProgress = 0.0;
```

* Variable: `totalProgress` (floating point)
* Value: Number 0.0 

~~~

```javascript
var lastActiveClass = '';
```

* Variable: `lastActiveClass` (string)
* Value: [empty string] 

~~~

```javascript
var hasAnyClass = false;
```

* Variable: `hasAnyClass` (boolean)
* Value: 0

~~~

```javascript
var prefixes = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' ');
for(var i = 0; i < prefixes.length; i++) {
```

* Variable: `prefixes` 
* Value: comma-delimited list = transform,WebkitTransform,MozTransform,OTransform,msTransform
* Variable: `i` (integer)
* Value: Number 0

~~~

```javascript
var headerHeight = headerInfo.height;
```

* Variable: `headerHeight` (integer)
* Value: fixed height of the header of the active document 

~~~

```javascript
maxHeight = (height > maxHeight) ? height : maxHeight;
```
 
* Variable: `maxHeight` (integer)
* Variable: `height` (integer)
* Value: `maxHeight` value is computed: If value of height is greater than the value of maxHeight, then set maxHeight = height, else set maxHeight to maxHeight.

~~~

```javascript
var sections = [];
```
 
* Variable: `sections` (array) 
* Value: null

~~~

```javascript
var $header = $(this);
```
 
* Variable: `$header` (object) 
* Value: a jquery reference to a header element, such as h1, h2, etc. 

~~~

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
