midnight.jquery.js

~~~

```javascript
var prefixes = 'transform WebkitTransform MozTransform OTransform msTransform'.split(' ');
for(var i = 0; i < prefixes.length; i++) {
```

* Variable: `prefixes` (array)
* Value: transform,WebkitTransform,MozTransform,OTransform,msTransform
* Value prefixes.length: 5
 
* Variable: `i` (integer)
* Value: Number 0
 
~~~

```javascript
var maxHeight = 0;
```
 
* Variable: `maxHeight` (integer)
* Value: Number 0
 
~~~

```javascript
maxHeight = (height > maxHeight) ? height : maxHeight;
```
 
* Variables: `maxHeight` (integer), `height` (integer)
* Value: `maxHeight` value is computed via a shorthand if statement: If value of height is greater then the value of maxHeight, then set maxHeight = height, else set maxHeight to maxHeight.

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
 
* Variables: `$header` (jQuery object) 
* Value: 



