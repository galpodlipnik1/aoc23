import fs from 'fs';

const file = fs.readFileSync('./input.txt', 'utf8');

const lines = file.split('\n');

/*
1.DEL
const calibrationValues = lines.map(line => {
  const firstMatch = line.match(/\d/);
  const lastMatch = line.match(/\d(?=\D*$)/);
  
  if (!firstMatch || !lastMatch) {
    return null;
  }

  const firstDigit = firstMatch[0];
  const lastDigit = lastMatch[0];
  return parseInt(firstDigit + lastDigit);
});

console.log(calibrationValues.reduce((curr, acc) => curr + acc, 0));
*/

// 2.DEL ??

const numbersAsString = {
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9
};

let totalSum = 0;

for (const line of lines) {
  const firstMatch = line.match(/^\d+|^\b(one|two|three|four|five|six|seven|eight|nine)\b/);
  const lastMatch = line.match(/\d+|\b(one|two|three|four|five|six|seven|eight|nine)\b(?=\D*$)/);

  if (!firstMatch || !lastMatch) {
    continue;
  }
  console.log(firstMatch[0], lastMatch[0]);

  let firstDigit = firstMatch[0];
  let lastDigit = lastMatch[0];

  if (isNaN(firstDigit)) {
    firstDigit = numbersAsString[firstDigit];
  }

  if (isNaN(lastDigit)) {
    lastDigit = numbersAsString[lastDigit];
  }

  const calibrationValue = parseInt(firstDigit.toString() + lastDigit.toString());
  totalSum += calibrationValue;
}

console.log(totalSum);