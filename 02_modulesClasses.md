## Module Basics  
Need transpiler and module loader.  
`traceur` - google.  
`es6-module-loader`  
`System.import('/base.js');`  
```javascript  
// base.js  
import { projectId } from 'module1.js';
console.log(projectId);  
  
// module1.js  
export let projectId = 99;  

```  

```javascript  
// base.js  
import { projectId as id, projectName } from 'module1.js';
console.log(`${ projectName} has id: ${id}`);  
  
// module1.js  
export let projectId = 99;  
export let projectName = 'BuildIt';

```  
  
`import` statements get hoisted.  
If you leave off the curly braces and import then what youre importing is the default export.  
`projectName` is the default export.    
```javascript  
// base.js  
import someValue from 'module1.js';
console.log(someValue);  
  
// module1.js  
export let projectId = 99;  
let projectName = 'BuildIt';  
export default projectName;

```  
You can export default like this also:  
`export { projectcId as default, projectName };`  
  
When using a wildcard you need to give an alias (`as alias`)  
```javascript  
// base.js  
import * as values from 'module1.js';
console.log(values);  
  

// module1.js  
let projectId = 99;  
let projectName = 'BuildIt';  
export { projectId, projectName };

```    

## Named Exports  
imports are read-only  
but their properties are not, you can modify them  
Were exporting the name of the function so when we change the function it chnages. 

## Classes
Classes are essentially functions that return objects.  
Adding a method to a class is the same as adding a method to the prototype.  
You can add a `constructor` to a class. It will be called when the class is instantiated.
```javascript  
class Task {
	constructor() {
		console.log('constructing task'); //this gets called when new Task() called
	}
	showId() {
		console.log('99');
	}
}
let task = new Task(); // 'constructing task' will be logged.  
```  
**LEAVE COMMA's OUT WHEN WORKING WITH CLASSES**  
Class body is not a place to define properties.  
Classes are not hoisted.  
We can assign classes to variables:  
```javascript  
let newClass = class Task {
	constructor() {
		console.log('constructing task');
	}
};

new newClass(); // 'constructing task' logged out.  
  
```  
Classes dont pollute the global namespace (unliek constructor functions).  

## extends and super
```javascript  
class Project {
	constructor(name='Hello World.') {
		console.log('constructing Project: ' + name);
	}
}

class SoftwareProject extends Project {
	constructor() {
		super();
		console.log('constructing SoftwareProject');
	}
}

let p = new SoftwareProject('Howdy Doody!');
console.log("p", p);
let pq = new SoftwareProject();
console.log("pq", pq);



Class Animal {
	constructor(name, height) {
		this.name = name;
		this.height = height;
	}

	hello() {
		console.log(`Hi. I'm ${this.name} from the Animal Kingdom.`);
	}
}

class Lion extends Animal {
	constructor(name, height, color) {
		super(name, height);  	// pass the variables to the parent constructor
		this.color = color;
	}

	// can override functions in the child class.  
}

let son = new Lion("Simba", 2, "Golden");
console.log(son);



```
If you dont use `super()` above then there is a `ReferenceError: this is not defined` thrown.  
If you have a subclass that has a constructor you need t

## Constructor Function Properties/Properties for Class Instances
To add properties to an instance use `this.property` in the constructor. Initialise things in the constructor.  

## Static Members
`static` keyword in ES6  
Holding reuseable functions rather than data.  

```javascript
class Project {
	static getDefaultId() {
		return 0;
	}
}
console.log(Project.getDefaultId());  // logs 0
var p = new Project();
console.log(p.getDefaultId());  // throws error. Static attached to class.


class Calculator {
	static multiply(a, b) {
		return a*b;
	}
}

console.log(Calculator.multiply(5, 7));	// 35

```

## new.target
mainly used in a constructor.  
`new.target` is a function.  
```javascript  
class Project {
	constructor() {
		console.log(new.target);
	}
}

class SoftwareProject extends Project {
	constructor() {
		super();
	}
}

let p = new SoftwareProject();
```
`new.target` is always going to point to the INITIAL constructor that got called.  
Can access static methods on the initial start up call. 
```javascript  
class Project {
	constructor() {
		console.log(new.target.getDefaultId()); // only works because getDefaultId is static  
	}
}

class SoftwareProject extends Project {
	static getDefaultId() { return 99; }
}

let p = new SoftwareProject();
```
