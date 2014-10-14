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

This method can remove elements from an array. In the example, it removes 1 element where `howMany` equals 1 and it removes that one element from index 2, which in this case is: drum. Splice can also add an element, which in the example it does by adding 'trumpet' at the index when drum was removed.  

```javascript
Array.prototype.unshift(element1[, ...[, elementN]]])

var arr = [1, 2];
arr.unshift(0,3,4); 
// arr is [0, 3, 4, 1, 2]
```

This method adds one or more elements to the front of an array and also returns the new length of the array.


### Methods that change how one or more arrays are represented

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

arr.toSource()

var alpha = new Array('a', 'b', 'c');
alpha.toSource();   
//returns ['a', 'b', 'c']
```

The Array.prototype.toSource() method returns a string, or array literal, representing the source code for instances of Array. The return value cane be used to create a new array as in the example.

```javascript
arr.toString()

var monthNames = ['Jan', 'Feb', 'Mar', 'Apr'];
var myVar = monthNames.toString(); 
// assigns 'Jan,Feb,Mar,Apr' to myVar.
```

The Array.prototype.toString() method returns a string representing the array and its elements as shown in the example. 

```javascript
arr.toLocaleString();
```
The Array.prototype.toLocaleString() method returns a string representing the array and its elements based on the locale of the user. Relevant array elements that vary based one's locale include current time and date. 

```javascript
arr.indexOf(searchElement[, fromIndex = 0])

var array = [2, 5, 9];
var index = array.indexOf(2);
// index is 0
index = array.indexOf(7);
// index is -1
index = array.indexOf(9, 2);
// index is 2
```
The Array.prototype.indexOf() method that searches forward looking for the first instance of a `searchElement` in an array and if found, returns the index of the specified element. If the array does not contain that element, a value of -1 is returned. 

```javascript
arr.lastIndexOf(searchElement[, fromIndex = arr.length])

var array = [2, 5, 9, 2];
var index = array.lastIndexOf(2);
// index is 3
index = array.lastIndexOf(7);
// index is -1
```
The Array.prototype.lastIndexOf() method is the opposite of indexOf(). It that searches backwards from the last index value (by defalut) looking for the first instance of a `searchElement` in an array and if found, returns the index of the specified element. If the array does not contain that element, a value of -1 is returned. 


### Methods that process arrays through iteration

```javascript
arr.forEach(callback[, thisArg])


function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

[2, 5, 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9
```

The Array.prototype.forEach() method loops through calls through each element in an array.

```javascript
arr.entries()

var arr = ['a', 'b', 'c'];
var eArr = arr.entries();
console.log(eArr.next().value); 
// [0, 'a']
```

The Array.prototype.entries() method returns the key/value pairs for each index in the array.

```javascript
arr.every(callback[, thisArg])

function isBigEnough(element, index, array) {
  return element >= 10;
}
var passed = [12, 5, 8, 130, 44].every(isBigEnough);
// passed is false
passed = [12, 54, 18, 130, 44].every(isBigEnough);
// passed is true
```

The Array.prototype.every() method returns true if every element in this array satisfies the provided testing function signified in a callback. `every` acts like the "for all" quantifier in mathematics and for an empty array, it returns true. Also, `every` does not mutate the array on which it is called.

```javascript
arr.some(callback[, thisArg])

function isBigEnough(element, index, array) {
  return element >= 10;
}
var passed = [2, 5, 8, 1, 4].some(isBigEnough);
// passed is false
passed = [12, 5, 8, 1, 4].some(isBigEnough);
// passed is true
```

The Array.prototype.some() method serves the same function as .every() except that it returns true if at least one element in this array satisfies the provided testing function signified in the callback.

```javascript
arr.filter(callback[, thisArg])

function isBigEnough(element) {
  return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```
The Array.prototype.filter() method creates a new array with all of the elements of this array for which the provided filtering function returns true. In the example, all numbers in the array less than 10 are filtered out of the original array.

```javascript
arr.find(callback[, thisArg])

function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); 
// undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); 
// 5
```

The method Array.prototype.find() returns the found value in the array, if an element in the array satisfies the provided testing function signified in the callback. Unlike indexOf(), it does not return the index, but rather the actual value of the array element. If the specified element is not found, the method returns undefined.

```javascript
arr.findIndex(callback[, thisArg])

```
The Array.prototype.findIndex() method is identical to .find(), except that it  returns the found index in the array, if an element in the array satisfies the provided testing function. If the specified element is not found, the method returns -1.

```javascript
arr.keys()

var arr = ['a', 'b', 'c'];
var eArr = arr.keys();
console.log(eArr.next().value); 
// 0
console.log(eArr.next().value); 
// 1
console.log(eArr.next().value); 
// 2
```

The Array.prototype.keys() method returns a new Array Iterator that contains the keys for each index in the array.

```javascript
arr.map(callback[, thisArg])

var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});
// doubles is now [2, 8, 18]. numbers is still [1, 4, 9]
```
The Array.prototype.map() creates a new array with the results of calling a provided function on every element in the array.

```javascript
arr.reduce(callback[, initialValue])

[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index, array) {
  return previousValue + currentValue;
}, 10);
```

The Array.prototype.reduce() method applies a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value. In the example, `previousValue` starts at 10 and iterates over the array adding each element and carrying a sum.

```javascript
Array.prototype.reduceRight()
```

The Array.prototype.reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.

### Generic Methods

These methods pertain to "array-like" objects, such as argument and strings, which have a numeric length property and corresponding non-negative integer properties.

They can inherit the methods from Array.prototype: reverse, sort, push, pop, shift, unshift, splice, concat, slice, indexOf, lastIndexOf, forEach, map, reduce, reduceRight, filter, some, and every.
