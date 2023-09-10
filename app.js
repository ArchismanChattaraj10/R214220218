// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Dummy array to store generated odd numbers
let oddNumbers = [];

// Function to check if a number is odd
function isOdd(number) {
  return number % 2 !== 0;
}

// API endpoint to generate and store an odd number
app.post('/generate-odd-number', (req, res) => {
  const max = req.body.max || 100;
  const newOddNumber = Math.floor(Math.random() * max) * 2 + 1; // Generate a random odd number

  oddNumbers.push(newOddNumber);

  res.json({ number: newOddNumber });
});

// API endpoint to retrieve the list of generated odd numbers
app.get('/generated-odd-numbers', (req, res) => {
  res.json({ oddNumbers });
});

// API endpoint to calculate statistics about the generated odd numbers
app.get('/odd-number-stats', (req, res) => {
  const totalOddNumbers = oddNumbers.length;
  const maxOddNumber = Math.max(...oddNumbers);
  const minOddNumber = Math.min(...oddNumbers);

  res.json({
    totalOddNumbers,
    maxOddNumber,
    minOddNumber,
  });
});

app.listen(port, () => {
  console.log(`Odd Number Management Microservice listening on port ${port}`);
});
