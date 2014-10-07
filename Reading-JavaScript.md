**cleanupLoaded.js**

```javascript
if (path.existsSync('loaded.json')) {
  var loadedFile = fs.readFileSync('loaded.json');
  var loaded = JSON.parse(loadedFile);
  for (var key in loaded.success) {
    idBucket[key] = true;
  }
}
```

```javascript
for (var key in loaded.success) {
  data = loaded.success[key];
  newData = {
    Address: {},
    location: {},
    LegacyData: {}
  };
  for (var dataKey in data) {

    /**
     * Converting String fields to Booleans
     */
    if (booleans.hasOwnProperty(dataKey)) {
        data[dataKey] = (data[dataKey] === 'Y' || data[dataKey] === true);
    }
```

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

**server.js**

```javascript
// temporary redirect from sheltr.org to philly.sheltr.org
function phillyRedirect() {
  return function(req, res, next) {
    res.writeHead(301, {'Location': 'http://philly.sheltr.org'});
    return res.end();
  };
};
```
**midnight.js**

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

```javascript
// Reset the header status
        for( ix in headers ) {
          // from == '' signals that the section is inactive
          headers[ ix ].from = '';
          headers[ ix ].progress = 0.0;
        }
```

```javascript
// We need to recalculate all sections and headers on resize.
      $(window).resize(function(){
        recalculateSections();
        updateHeaderHeight();

        recalculateHeaders();
        updateHeaders();
      }).trigger('resize');
```    

**intro.js**

~~~

```javascript
  var allIntroSteps = [];
```

* Variable: `allIntroSteps` (array)
* Value: empty array

~~~

```javascript
var temp = {};
      for (var key in object) {
          temp[key] = _cloneObject(object[key]);
      }
```

* Variable: `temp` (object)
* for-in loop where key-value pairs of the object are being looped through

~~~

```javascript
 if (this._options.showButtons === false) {
        buttonsLayer.style.display = 'none';
 }
```

* if showButtons property of the object is false (bolean), then hide DOM element buttonsLayer

~~~

```javascript
 for (var i = 0, elmsLength = allIntroSteps.length; i < elmsLength; i++) {
        var currentElement = allIntroSteps[i];
        var step = parseInt(currentElement.getAttribute('data-step'), 10);
```
* for loop - loops through an array of DOM elements
* Variable: `currentElement` is set to the current DOM element
* Variable: `step` - parseInt converts the first argument to a string, parses it, and returns an integer 

~~~

```javascript
  if ((targetOffset.height + targetOffset.top + tooltipHeight) > windowSize.height) {
      _removeEntry(possiblePositions, "bottom")
  }
```
* if statement that adds height values and compares to the windowsSize height. If sum is greater, removes space below

~~~

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
* typeof operator - if operand (define) is a function and that function has an anonymous module, then pass 2 arguments: export object and factory function into the define function

~~~

```javascript
  introItems.sort(function (a, b) {
    return a.step - b.step;
  });
```
* `introItems` is an array whose elements are sorted in ascending order via the array sort function



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
