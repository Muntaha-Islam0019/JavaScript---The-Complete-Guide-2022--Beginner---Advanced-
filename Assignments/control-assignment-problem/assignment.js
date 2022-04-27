const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber > 0.7) {
  alert('The first number is bigger than 0.7!');
} else {
  alert('The first number is smaller than 0.7!');
}

numbers = [19, 47, 10, 7, 13];

alert('Starting for loop');
for (const number of numbers) {
  alert(number);
}

alert('Starting while loop');
let i = numbers.length - 1;
while (i >= 0) {
  alert(numbers[i--]);
}

const anotherRandomNumber = Math.random();

if (
  (randomNumber > 0.7 && anotherRandomNumber > 0.7) ||
  randomNumber <= 0.2 ||
  anotherRandomNumber <= 0.2
) {
  alert(
    `The numbers are ${randomNumber} and ${anotherRandomNumber}. Thus, they satisfy the conditions.`
  );
} else {
  alert(
    `The numbers are ${randomNumber} and ${anotherRandomNumber}. Thus, they do not satisfy the conditions.`
  );
}
