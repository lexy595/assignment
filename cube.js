function cubeNumbers(num1, num2, num3) {
    // Calculate the cubes
    const cube1 = Math.pow(num1, 3)
    const cube2 = Math.pow(num2, 3)
    const cube3 = Math.pow(num3, 3)
    // Return the results
    return {
        cube1: cube1,
        cube2: cube2,
        cube3: cube3
    }
}
// Example usage:
const result = cubeNumbers(5, 15, 20)
console.log(result) // Output
