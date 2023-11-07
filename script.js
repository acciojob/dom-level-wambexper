// Find the element with the id "level"
const targetElement = document.getElementById("level");

// Initialize a variable to keep track of the DOM level
let domLevel = 0;

// Traverse the parent elements until we reach the root "html" element
let currentElement = targetElement;
while (currentElement && currentElement !== document.documentElement) {
    domLevel++;
    currentElement = currentElement.parentElement;
}

// Display the result using the alert function
alert(`The level of the element is: ${domLevel}`);
