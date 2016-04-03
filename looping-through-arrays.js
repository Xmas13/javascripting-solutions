// Used Javascript to create a basic for loop to add 's' to each item in the array.
var pets = ['cat', 'dog', 'rat'];

for (var i = 0; i < pets.length; i++) {
	pets[i] = pets[i] + 's';
}

console.log(pets);