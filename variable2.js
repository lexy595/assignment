let y = 10;
console.log(y); // Output: 10

y = 20; // Updating
console.log(y); // Output: 20

if (true) {
    let y = 30; // Different variable in block scope
    console.log(y); // Output: 30
}

console.log(y); // Output: 20
