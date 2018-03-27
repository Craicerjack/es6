### Check if variable exists using !!variable 
This will convert to boolean and return false if 0, null, "", undefined, NaN
```javascript 
function Account(cash) {  
    this.cash = cash;
    this.hasMoney = !!cash;
}
var account = new Account(100.50);  
console.log(account.cash); // 100.50  
console.log(account.hasMoney); // true
var emptyAccount = new Account(0);  
console.log(emptyAccount.cash); // 0  
console.log(emptyAccount.hasMoney); // false
```

```javascript
//instead of this
if (connected) {  
    login();
}
//do this 
connected && login();
```

## ES6

No hoisting occurs with `let`. 

##### Arrow Functions
```javascript
// variable = input => output;
// If no input use (). If one input dont need to use parenthesis
// this input results in this output.
var getName = () => 'Craicerjack';
getName(); // returns 'Craicerjack';

var knight = name => 'Sir ' + name;
knight('Craicerjack'); // returns 'Sir Craicerjack';

var getPrice = (count, tax) => count * 4.00 * (1 + tax);
getPrice(2, 0.7); //returns 8.56PPPP

```  
Arrow functions are mire about handling the scope of `this` in a function.  
ES5 
`document.addEventListener('click', function() { console.log(this); });`  // #document
`var invoice = { number: 123, process: function() { console.log(this); }};`
The above `this` applies to the element on which the event is attached and to the object 

ES6
`document.addEventListener('click', () => console.log(this) );`  // Window {...}
`var invoice2 = { number: 123, process: () => console.log(this) };`
The above this is set to the context of the code that we are in, ie the global window object. it would be a function if it was function.

```javascript  
var invoice2 = { 
    number: 123, 
    process: function() {
        return () => console.log(this.number);
    } 
};  
invoice.process()(); //returns 123  
```  
The context of the above is the function. 

YOU CANNOT BIND A NEW OBJECT TO AN ARROW FUNCTION  
You cannot change the context of `this` with `bind, call, apply` in an arrow function.  


##### Default Function Parameters
```javascript
var getProduct = function(productId = 1000) {
    console.log(productId);
}
getProduct(); //returns 1000
getProduct(599); //returns 599
```
 * If a func has more than one param you can pass in `undefined` and it will use the default
 * you can access one parameter in another parameter `function(price, tax = price * 0.07) {}`
 * Can access variables within scope and pass functions as params
 * arguments only considers params passed in function call and ignores defaults

##### Rest and Spread
```javascript 
var showCategories = function(productId, ...categories) {
    console.log(categories instanceof Array);
};
showCategories(123, 'search', 'advertising');
```
In the above code `...` is the `Rest`, and gathers all the remaining params into an array called `categories`.  

`Spread` is like the opposite of `Rest`
Takes an `array` and splits it up into a list of params. 
Spread will break a string into characters
```javascript
var prices = [12, 20, 18];
var maxPrice = Math.max(...prices);
console.log(maxPrice); // returns 20
```  

##### Object Literal Extensions
```javascript
var name = "Craicerjack", title = "Sir";
var me = {
    name,
    title,
    full() {
        return this.name + this.title
    },
    "another function"() {
        console.log(" - this will work if you call it with bracket notation");
    },
    [title]: name, 
}
```  
 * Dont need to add `name: name` can use shorthand like above, 
 * **BUT** `this` refers to the context, so will reference the name and title outside the object.
 * You can have space in a property name, 
 * but you need to wrap it in quotes and 
 * access it use bracket notation.
 * `[title]: name` above will return `Sir: "Craicerjack"`
 * You can put an entire expression within the brackets.  
 * This can be used for a function too `[var_name + "string"]() {}`
 * These brackets work with `getters` and `setters` also.

##### For Of Loops
```javascript
var itemsArray = ['item1', 'item2', 'item3'];
for (var item of categories) {};
```  
 * You can iterate through the elements of an array, or the chars of a string

##### Template Literals
```javascript
var name = "Craicerjack";
console.log(`Your name is - ${name}`); // logs 'Your name is - Craicerjack'

function exampleTemp(segments, ...values) {}
exampleTemp `Example: ${var1} with ${var2}`;
// segments = ["Example: ", " with ", ""]
// ...values = [var1, var2]
```  
 * Whitespace, newlines and tabs are maintained in Template literals.
 * You can have expressions within the {}


##### Destructuring
```javascript
let nums = [100, 500, 1000];
let [ton, monkey, lots] = nums; // ton = 100, monkey = 500, lots= 1000 
let [ton, ...others] = nums;    // ton = 100, others = [500, 1000]
```
Destructuring an array and assigning values to variables
You can destructure an object using `{}` instead of `[]`
Destructuring requires an iterator


##### 
##### 



