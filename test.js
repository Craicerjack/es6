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