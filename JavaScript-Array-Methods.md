### Methods that modify arrays

```javascript
Array.prototype.copyWithin(target, start[, end = this.length]) 

[1, 2, 3, 4, 5].copyWithin(0, 3);
// [4, 5, 3, 4, 5]
```

This method copies a sequence of array elements starting with `start` index and going to the end of the array unless otherwise specified. It then takes the copied sequence and places those elements starting at the `target` index. In the example, the secquence starts at index 3 and includes index 4 to give 4,5. The copied sequence is then copied within the array starting at index 0, giving the resultant [4,5,3,4,5]

```javascript
Array.prototype.fill(value[, start = 0[, end = this.length]]) 

[1, 2, 3].fill(4)               
// [4, 4, 4]
```

This method fills all the elements of an array from a start index to an end index with a `value`. If no index is provided, it copies over all array elements. 

```javascript
Array.prototype.pop()

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var popped = myFish.pop();
console.log(myFish); // ['angel', 'clown', 'mandarin' ] 
console.log(popped); // 'sturgeon'
```

This method removes the last element from an array and returns that element. 

```javascript
Array.prototype.push(element1, ..., elementN)

var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');
console.log(sports); 
// ['soccer', 'baseball', 'football', 'swimming']
console.log(total);  
// 4
```

This method adds one or more elements to the end of an array, like a stack, and can also returns the new length of the array if prompted.

```javascript
Array.prototype.reverse()

var myArray = ['one', 'two', 'three'];
myArray.reverse(); 
console.log(myArray) 
// ['three', 'two', 'one']
```

This method reverses the order of the elements of an array.  

```javascript
Array.prototype.shift()

var myFish = ['angel', 'clown', 'mandarin', 'surgeon'];
var shifted = myFish.shift();
console.log('myFish after: ' + myFish);
console.log('Removed this element: ' + shifted);
//myFish after: clown,mandarin,surgeon
//Removed this element: angel
```

This method removes the first element (index 0) from an array, like a queue, and returns that element. It is the opposite of `Array.prototype.push`.

```javascript
Array.prototype.sort([compareFunction])

var scores = [1, 2, 10, 21]; 
scores.sort(); 
// [1, 10, 2, 21]
```

This method sorts the elements of an array. Without an optional compare value however the array is sorted according to each character's Unicode code point value. In other words, an array of numbers, like those in the example, are converted to strings, where "10" comes before "2" in Unicode order. 

```javascript
Array.prototype.splice(index, howMany[, element1[, ...[, elementN]]])

var myFish = ['angel', 'clown', 'drum', 'surgeon'];
removed = myFish.splice(2, 1, 'trumpet');
// myFish is ['angel', 'clown', 'trumpet', 'surgeon']
// removed is ['drum']
```

This method can remove elements from an array. In the example, it removes 1 element where `homeMany` equals 1 and it removes that one element from index 2, which in this case is: drum. Splice can also add an element, which in the example it does by adding 'trumpet' at the index when drum was removed.  

```javascript
Array.prototype.unshift(element1[, ...[, elementN]]])

var arr = [1, 2];
arr.unshift(0,3,4); 
// arr is [0, 3, 4, 1, 2]
```

This method adds one or more elements to the front of an array and also returns the new length of the array.


### Methods that change how an existing array is represented

```javascript
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])

var alpha = ['a', 'b', 'c'], numeric = [1, 2, 3];
var alphaNumeric = alpha.concat(numeric);
console.log(alphaNumeric); 
// Result: ['a', 'b', 'c', 1, 2, 3]
```

The Array.prototype.concat() method joins 2 or more arrays into one array. In the example, numeric is concatenated to the end of the alpha array.


```javascript
Array.prototype.contains(searchElement[, fromIndex]) 

[1, 2, 3].contains(2);     
// true
```

This is a search method and determines whether an array contains a certain element, returning true if the element is found.

```javascript
str = arr.join([separator = ','])
var a = new Array('Wind', 'Rain', 'Fire');
var myVar = a.join(' + '); 
// assigns 'Wind + Rain + Fire' to myVar
```

The Array.prototype.join() method joins all elements of an array into a single string and can include an optional separator.

```javascript
arr.slice([begin[, end]])

var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);
// citrus contains ['Orange','Lemon']
```
The Array.prototype.slice() method extracts a section of an array starting with the element from the index at `begin` and up to but not including the element from the index at `end`. It returns a new array. If `begin` is positive number, it starts at index 0 and extracts to the right. If it is negative, it starts at the end of the array at index (array.length-1) and extracts to the left. 

```javascript
Array.prototype.toSource() 
```

Returns an array literal representing the specified array; you can use this value to create a new array. Overrides the Object.prototype.toSource() method.

```javascript
Array.prototype.toString()
```

Returns a string representing the array and its elements. Overrides the Object.prototype.toString() method.

```javascript
Array.prototype.toLocaleString()
```
Returns a localized string representing the array and its elements. Overrides the Object.prototype.toLocaleString() method.

```javascript
Array.prototype.indexOf()
```
Returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found.

```javascript
Array.prototype.lastIndexOf()
```
Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.

Iteration methods - Several methods take as arguments functions to be called back while processing the array. When these methods are called, the length of the array is sampled, and any element added beyond this length from within the callback is not visited. Other changes to the array (setting the value of or deleting an element) may affect the results of the operation if the method visits the changed element afterwards. While the specific behavior of these methods in such cases is well-defined, you should not rely upon it so as not to confuse others who might read your code. If you must mutate the array, copy into a new array instead.

```javascript
Array.prototype.forEach()
```

Calls a function for each element in the array.

```javascript
Array.prototype.entries() 
```

Returns a new Array Iterator object that contains the key/value pairs for each index in the array.

```javascript
Array.prototype.every()
```

Returns true if every element in this array satisfies the provided testing function.

```javascript
Array.prototype.some()
```

Returns true if at least one element in this array satisfies the provided testing function.

```javascript
Array.prototype.filter()
```

Creates a new array with all of the elements of this array for which the provided filtering function returns true.

```javascript
Array.prototype.find() 
```

Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found.

```javascript
Array.prototype.findIndex()
```

Returns the found index in the array, if an element in the array satisfies the provided testing function or -1 if not found.

```javascript
Array.prototype.keys() 
```

Returns a new Array Iterator that contains the keys for each index in the array.

```javascript
Array.prototype.map()
```

Creates a new array with the results of calling a provided function on every element in this array.

```javascript
Array.prototype.reduce()
```

Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.

```javascript
Array.prototype.reduceRight()
```

Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.
