// Using a basic array filter to filter for even numbers and logging it to the console
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers.filter(function evenNumbers (number) {
	return number % 2 === 0;
}));