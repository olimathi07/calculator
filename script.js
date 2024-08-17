let displayValue = ''; // Initialize display value as an empty string

// Function to update the display with user input
function appendToDisplay(value) {
    displayValue += value; // Append value to display
    document.getElementById('display').innerHTML = displayValue || '0';
}

// Function to clear the display
function clearDisplay() {
    displayValue = '';
    document.getElementById('display').innerHTML = '0';
}

// Function to calculate the result
function calculate() {
    try {
        let result = eval(displayValue); // Evaluate the expression
        document.getElementById('display').innerHTML = result;
        displayValue = result.toString(); // Update displayValue with the result
    } catch (error) {
        document.getElementById('display').innerHTML = 'Error';
        displayValue = ''; // Clear displayValue in case of error
    }
}

// Function to square the current number
function square() {
    try {
        let result = eval(displayValue); // Evaluate the expression
        if (isNaN(result)) throw new Error('Invalid input');
        result = result * result; // Calculate the square
        document.getElementById('display').innerHTML = result;
        displayValue = result.toString(); // Update displayValue with the result
    } catch (error) {
        document.getElementById('display').innerHTML = 'Error';
        displayValue = ''; // Clear displayValue in case of error
    }
}

// Function to delete the last character of the display
function deleteLast() {
    displayValue = displayValue.slice(0, -1); // Remove the last character
    document.getElementById('display').innerHTML = displayValue || '0';
}
