console.log('hello world - test - hello again');
setTimeout(() => { console.log('TEST so i can see!') }, 3000);


let vals = [10, 20, 30, 40];
let double = (x) => { return x*2 }
let newVals = vals.map(double);
console.log(newVals);
console.log(vals.map(x => x*3));


// On 8