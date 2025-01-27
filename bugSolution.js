```javascript
function myFunction(a, b) {
  if (a === 0 || b === 0) {
    throw new Error('Division by zero or zero input'); //Explicit error handling
  }
  return a / b; 
}

try {
  console.log(myFunction(10, 0)); // Throws an error
} catch (error) {
  console.error("Error:", error.message); //Handle the error
}
```