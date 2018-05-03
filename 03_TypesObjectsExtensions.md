## Symbols
 > A symbol is a unique and immutable data type and may be used as an identifier for object properties.  

Generate a unique identifier **BUT** we never gain access to that identifier. we can get the debug string that was used to create the Symbol. 
```javascript  
let eventSymbol = Symbol('resize event');
console.log(typeof eventSymbol);

let s = Symbol.for('resize event');
console.log(s.toString());

let description = Symbol.keyFor(s);
console.log(description);

let article = {
	title: 'Whiteface Mountain',
	[Symbol.for('article')]: 'My Article'
};

let val = article[Symbol.for('article')];
console.log(val);
console.log(article);
console.log( Object.getOwnPropertySymbols(article));


```  

## Well-known Symbols
MDN.

## Object Extensions
`setPrototypeOf()`  
Set the prototype of onw object to another object.  
```javascript  
let a = {
	x: 1
};
let b = {
	y: 2
};
Object.setPrototypeOf(a, b); // set prototype of a to b.
console.log(a.y); // logs 2 as b is now the prototype of a.  

```  
--- 
`.assign()`  
assign will populate an object with all the params passed to it. 
properties will be overwritten later params.  
Only assigns properties on the object and doesnt go up the prototype chain.  
```javascript
let a = { a: 1 };
let b = { b: 2 };
let target = {};
Object.assign(target, a, b);
console.log(target); // logs { a: 1, b: 2 }

let a = { a: 1 };
let b = { a: 5, b: 2 };
let target = {};
Object.assign(target, a, b);
console.log(target); // logs { a: 5, b: 2 } a is overwritten
```
---
`.is()`  
compare items  
```javascript
let amount = NaN;

console.log(amount === amount); // false
console.log(Object.is(amount, amount)); //true
```

## String Extensions
`.startsWith()` - return boolean if string starts with provided string.  
`.endsWith()` - return boolean if string ends with provided string.  
`.includes()` - return boolean if string contains provided string.  
`.normalise()` - return the noramlised string.  
`.raw` - template tag  
`.repeat()` - called on a string. repeats the number of times passed to the function.  

## Number Extensions
`Number.parseInt` - use this rather than global function `parseInt()`. Same with `parseFloat`.  
`Number.isNaN()` - use this.  
`Number.isFinite()` - This and the above - the global functions of this will change values (from str to number). This wont.  
`Number.isInterger()` - return boolean.  
`Number.isSafeInterger()` - return boolean.  Integer than can be safely represented by a floating point.  
3 new constants if you need them:  
`Number.EPSILON`  
`Number.MAX_SAFE_INTEGER`  
`Number.MIN_SAFE_INTEGER`  

## Math Extensions  
##### Hyperbolic Functions

 * `cosh()`
 * `acosh()`
 * `sinh()`
 * `asinh()`
 * `tanh()`
 * `atanh()`
 * `hypot()`  
 * `cbrt()`  - cube root 
 * `clz32()`  - count leading zeros (32 bit integers)
 * `expm1()` - equal to exp(x)-1
 * `log2()` - log base 2
 * `log10()` - log base 10
 * `log1p()` - equal to log(x+1)
 * `imul()` - 32 bit integer multiplication
 * `sign()` - the numbers sign: `1, -1, 0, -0, NaN`  
 * `trunc()` - the integer part of a number
 * `fround()` - round to nearest 32 bit floating point value

## Function Extensions
```javascript
let fn = function calc() {
	return 0;
}
console.log(fn.name); // logs 'calc'

let fn = function() {
	return 0;
}
let newFn = fn;
console.log(fn.name); // logs 'fn'
console.log(newFn.name); // logs 'fn'


class Calculator {
	constructor() {}
	add() {}
}
let c = new Calculator();
console.log(Calculator.name);  // Calculator
console.log(c.add.name);	// add
```  
