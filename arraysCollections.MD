## Array Extensions

`Array.from()` - creates a new Array instance from an array-like or iterable object   
`Array.from(arrayLike[, mapFn[, thisArg]])`  - thisArg = Value to use as this when executing mapFn.

```javascript
let amounts = [800, 810, 820];
let salaries = Array.from(amounts, v => v+100);
console.log(salaries);		// [900, 910, 920]  


let amounts = [800, 810, 820];
let salaries = Array.from(amounts, function(v) {
	return v + this.adjustment; 		// arrow wont work here because they dont allow you to change the context of this
}, { adjustment: 50 });	//
console.log(salaries);  // [850, 860, 870]  

```

`Array.fill()` - fills all the elements of an array from a start index to an end index with a static value. The end index is not included    
`arr.fill(value[, start[, end]])`  

```javascript
let salaries = [800, 810, 820];
salaries.fill(900);
console.log(salaries);		// [900, 900, 900]  
```  

`Array.find()` - returns the value of the first element in the array that satisfies the provided testing function. Otherwise undefined is returned.  
`arr.find(callback[, thisArg])`  


`Array.findIndex()` - returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned.  
`arr.findIndex(callback[, thisArg])`  


`Array.copyWithin()` - shallow copies part of an array to another location in the same array and returns it, without modifying its size    
`arr.copyWithin(target)`
`arr.copyWithin(target, start)`
`arr.copyWithin(target, start, end)`  
```javascript
let salaries = [600, 700, 800];
salaries.copyWithin(2, 0);
console.log(salaries);	// [600, 700, 600] 
```

`Array.entries()` - returns a new Array Iterator object that contains the key/value pairs for each index in the array.

```javascript
let ids = ['A', 'B', 'C'];
console.log(...ids.entries()); 	// [ 0, 'A' ] [ 1, 'B' ] [ 2, 'C' ]
console.log(...ids.keys()); 	// 0, 1, 2
console.log(...ids.values()); 	// 'A', 'B', 'C' 

```

## ArrayBuffers and Typed Arrays
ArrayBuffer is an array of 8-bit bytes  
Typed Arrays are Numeric Types. Exist on top of ArrayBuffer  
Im unsure about what this is about...... or why I might need it  

## DataView and Endianness

## Map and WeakMap
Using objects as keys  

```javascript
let employee1 = { name: 'Jake' };
let employee2 = { name: 'Janet' };

let employees = new Map();
employees.set(employee1, 'ABC');
employees.set(employee2, '123');

console.log(employees.get(employee1)); 	// ABC
console.log(employees.size); 	// 2

employees.delete(employee2);
console.log(employees.size); 	// 1

employees.clear();
console.log(employees.size); 	// 0

```

```javascript
let employee1 = { name: 'Jake' };
let employee2 = { name: 'Janet' };

let arr = [
	[employee1, 'ABC'],
	[employee2, '123']
]

let employees = new Map(arr); // you can pass a map an iterable
console.log(employees.get(employee1));
console.log(employees.size);
console.log(employees.has(employee2));  // has() - whether a key exists in a map

let list = [...employees.values()];
let list2 = [...employees.keys()];
let list3 = [...employees];
let list4 = [...employees.entries()];
console.log(list);		// [ 'ABC', '123' ]
console.log(list2);		// [ { name: 'Jake' }, { name: 'Janet' } ]
console.log(list3);		// [ [ { name: 'Jake' }, 'ABC' ], [ { name: 'Janet' }, '123' ] ]
console.log(list4);		// [ [ { name: 'Jake' }, 'ABC' ], [ { name: 'Janet' }, '123' ] ]
```

WeakMap items will be collected by garbage collection.   
You cant get size on a WeakMap  

## Set and WeakSet
Set - guarantee uniqueness of items.  
Constructor for set can take an iterator. 
Set - the keys and values are the same  
 
```javascript
let perks = new Set();

perks.add('Car');
perks.add('Super Long Vacation');
perks.add('Car');

console.log(perks.size);

let otherPerks = new Set([
	'car',
	'flexibility',
	'laptop'
]);	

console.log(otherPerks.size);

let newPerks = new Set(otherPerks);
console.log(newPerks); 	//Set { 'car', 'flexibility', 'laptop' }
console.log(otherPerks.has('car')); 	//true
console.log(otherPerks.has('space ship')); 	// false
console.log(...newPerks.keys());	// car flexibility laptop
console.log(...newPerks.values());	// car flexibility laptop
console.log(...newPerks.entries());	// [ 'car', 'car' ] [ 'flexibility', 'flexibility' ] [ 'laptop', 'laptop' ]


let cons = new Set([
	{ id: 800 },
	{ id: 800 }
]);

console.log(cons.size); 	// 2 - even though same stuff in objects, they are separate objects 
```

## Subclassing
