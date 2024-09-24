function calculateRectangle(length, breadth) {
    
    // Calculate area and perimeter of the rectangle
    const area = length * breadth;
    const perimeter = 2 * (length + breadth);

    // Return the results
    return {
        area: area,
        perimeter: perimeter,
        length: length,
        breadth: breadth
    };
}

// Example 
const rectangle = calculateRectangle(5, 10);
console.log(rectangle);
