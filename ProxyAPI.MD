## Proxy
Is an object that wraps another object or wraps another function.  
And with the Proxy we can monitor access to the wrapped item. 
Anything in the `Reflect` API should be usable as a trap in a Proxy.  


`var p = new Proxy(target, handler);`  
**Parameters**  
*target*  
A target object (can be any sort of object, including a native array, a function or even another proxy) to wrap with Proxy.  
*handler*  
An object whose properties are functions which define the behavior of the proxy when an operation is performed on it.

## Available Traps
```javascript  

handler.construct();    
handler.apply();  
handler.getPrototypeOf();    
handler.setPrototypeOf();    
handler.get();  
handler.set();    
handler.has();  
handler.ownKeys();  
handler.defineProperty();  
handler.deleteProperty();  
handler.getOwnPropertyDescriptor();    
handler.preventExtensions();    
handler.isExtensible();
```    

## Get by Proxy
```javascript
function Employee() {
	this.name = 'Milton Waddams';
	this.salary = 0;
}
var e = new Employee();

var p = new Proxy(e, { 
	get: function(target, prop, receiver) {
		return "Attempted access: " + prop;
	}
});
console.log(p.salary);

function Employee() {
	this.name = 'Milton Waddams';
	this.salary = 0;
}
var e = new Employee();

// var p = new Proxy(new Employee(), { 
var p = new Proxy(e, { 
	get: function(target, propertyKey, receiver) { 
		console.log("Attempted access: " + propertyKey);
		return Reflect.get(target, propertyKey, receiver);
	}
});
console.log(p.salary);


function Employee() {
	this.name = 'Milton Waddams';
	this.salary = 0;
}
var e = new Employee();

// var p = new Proxy(new Employee(), { 
var p = new Proxy(e, { 
	get: function(target, propertyKey, receiver) { 
		console.log("Attempted access: " + propertyKey);
		return (propertyKey === 'salary') ? "Denied..." : Reflect.get(target, propertyKey, receiver);
	}
});
console.log(p.salary);
console.log(p.name);
```      

## Calling Functions by Proxy  
```javascript
function getId() {
	return 55;
}

var p = new Proxy(getId, {
	apply: function(target, thisArg, argumentsList) {
		return Reflect.apply(target, thisArg, argumentsList);
	}
});

console.log(p());
```
## A Proxy as a Prototype  
```javascript
var t = {
	tableId: 99
}

var p = new Proxy({}, {
	get: function(target, propertyKey, receiver) {
		return 'Property ' + propertyKey + ' doesnt exist...';
	}
});

Object.setPrototypeOf(t, p);
console.log(t.tableId);		// 99
console.log(t.size);		// Property size doesnt exist...
```

## Revocable Proxies  
Shut down a proxy. If state or data changes and we need to get rid of old proxy.  
```javascript

```
