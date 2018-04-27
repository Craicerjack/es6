## Iterators
```javascript
let ids = [9000, 9001, 9002];
let it = ids[Symbol.iterator]();
console.log(it.next());     // { value: 9000, done: false }
console.log(it.next());     // { value: 9001, done: false }
console.log(it.next());     // { value: 9002, done: false }
console.log(it.next());     // { value: undefined, done: true } 



let idMaker = {
    [Symbol.iterator]() {
        let nextId = 8000;
        return {
            next() {
                return {
                    value: nextId++,
                    done: false
                };
            }
        };
    }
};  
for (let v of idMaker) {
    if (v > 8002) {
        break;
    }
    console.log(v);
}  


let idMaker = {
    [Symbol.iterator]() {
        let nextId = 8000;
        return {
            next() {
                let value = (nextId>8002) ? undefined : nextId++;
                let done = !value;
                return { value, done };
            }
        };
    }
};  
for (let v of idMaker) {
    console.log(v);
}
```

The iterator should determine when its done, not the for loop.  

## Generators
Asterisk shows something is a generator.  
Generator controlled by iterator. 
```javascript  
function *process() {
    yield 8000;
    yield 8001;
}

let it = process();
console.log(it.next()); // { value: 8000, done: false }

// Yield indefinitely   
function *process() {
    let nextId = 7000;
    while(true) {
        yield(nextId++);
    }
}

let it = process();
it.next();
console.log(it.next()); // { value: 7001, done: false }  


function *process() {
    let nextId = 7000;
    while(true) {
        yield(nextId++);
    }
}

for (let id of process()) {
    if (id > 7002) {
        break;
    }
    console.log(id)  // 7000, 7001, 7002
}   
```

## Yielding in Generators


## throw and return
if an iterator `throws` something need to make sure that the generator can handle it or else the generator will terminate.  
Calling `return` on an iterator is a clean way to wrap up the iterator without termniating it.  

```javascript
function *process() {
    try {
        yield 9000;
        yield 9001;
        yield 9002;
    } catch(e) {

    }
}

let it = process();
console.log(it.next().value);       // 9000
console.log(it.throw('foo'));     // { value: undefined, done: true } exception raised and generator completed
console.log(it.next());     // { value: undefined, done: true }


function *process() {
    yield 9000;
    yield 9001;
    yield 9002;
}

let it = process();
console.log(it.next().value);       // 9000
console.log(it.throw('foo'));     //  exception foo and terminates
console.log(it.next());     //  doesnt get hit


function *process() {
    yield 9000;
    yield 9001;
    yield 9002;
}

let it = process();
console.log(it.next().value);       //  9000
console.log(it.return('foo'));     //   { value: 'foo', done: true }
console.log(it.next());     //  { value: undefined, done: true }


```

## Promises  
An object waiting for an asynchronous task to complete.  
Promise can be fulfilled or rejected.  

```javascript
function doAsync() {
    // set up promise code
}

// doAsync().then(resolve, reject);
doAsync().then(function(value) {
    console.log('Fulfilled! '+ value);
}, function(reason) {
    console.log('Rejected! '+reason);
})
```

use `.catch()` at the end of a promise chain to catch any rehections.  

## Promise Features  

`Promise.resolve()` creates a promise that will resolve with the passed params.  
Once any promise has been rejected the Promise exits and the reject() function is called.  
`Promise.all()` - waits for all promises to fulfill, unless one is rejected  
`Promise.race()` - Whichever Promise gets finsihed first  

