var x = 10;
console.log(x); // Output: 10

var x = 20; // Re-declaring
console.log(x); // Output: 20

if (true) {
    var x = 30; // Same variable
    console.log(x); // Output: 30
}

console.log(x); // Output: 30
