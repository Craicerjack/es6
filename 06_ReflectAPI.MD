## Construction and Method Calls  
`Reflect.construct(target, argumentsList[, newTarget]);` 

```javascript
class Restaurant {
	constructor(name, city) {
		// console.log(`${name} in ${city}`);
		console.log(`new.target: ${new.target}`);
	}
}

function restaurantMaker() {
	console.log('in restaurantMaker');
}

let r = Reflect.construct(Restaurant, ['Zoeys', 'Goleta'], restaurantMaker); // when we pass arguments for constructor they need to be array elements.
console.log(r instanceof Restaurant);
console.log(r);
```

`Reflect.apply(target, thisArgument, argumentsList);` 

```javascript
class Restaurant {
	constructor(name, city) {
		this.id = 33;
	}
	show() {
		console.log(this.id);
	}
	tell(prefix) {
		console.log(prefix+this.id);
	}
}

Reflect.apply(Restaurant.prototype.show, {id: 99}, []); // 99
Reflect.apply(Restaurant.prototype.tell, {id: 22}, ['REST:']); // REST:22
```

## Reflect and Property Extensions  
`Reflect.preventExtensions(target);` - Prevents extending the object, can no longer add properties to that object.  
`Reflect.isExtensible(target);` - check if object is extensible  

