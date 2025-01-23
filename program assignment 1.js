const readline = require('readline');

// Interface for user input
const rl = readline.createInterface({

    input: process.stdin,
    output: process.stdout
});

// Calculate the mean of an array of numbers
function calculateMean(numbers) {

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / numbers.length;
}

// Calculate the median of an array of numbers
function calculateMedian(numbers) {

    numbers.sort((a, b) => a - b); 
    const mid = Math.floor(numbers.length / 2);

    if (numbers.length % 2 === 0) {
        // Even number of elements, take the average of the middle two
        return (numbers[mid - 1] + numbers[mid]) / 2;
    } else {
        // Odd number of elements, take the middle element
        return numbers[mid];
    }
}

// Function to prompt user for input and process it
function getUserInput() {

    let numbers = [];

    console.log("Enter integers one by one. Type L to leave and calculate:");

    rl.on('line', (input) => {
        if (input.toUpperCase() === 'L') {
            // User wants to stop entering numbers
            if (numbers.length === 0) {
                console.log("No numbers were entered.");
            } else {
                // Calculate and display mean and median
                const mean = calculateMean(numbers);
                const median = calculateMedian(numbers);

                console.log(`\nResult:`);
                console.log(`Numbers listed: ${numbers.join(', ')}`);
                console.log(`Mean: ${mean.toFixed(2)}`);
                console.log(`Median: ${median}`);

            }
            rl.close();

        } else {
            // Check if it's a valid integer
            const num = parseInt(input, 10);
            if (!isNaN(num)) {
                numbers.push(num);
            } else {
                console.log("Invalid input. Please enter an integer or L to leave.");
            }
        }
    });
}

getUserInput();
