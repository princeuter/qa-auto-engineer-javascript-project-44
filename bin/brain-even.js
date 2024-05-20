#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '../src/cli.js';

const player = name();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let counter = 0;
for (let i = 1; i <= 3; i += 1) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  const isEven = randomNumber % 2 === 0;
  if (answer === 'yes') {
    if (isEven) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${player}!`);
      break;
    }
  } else if (answer === 'no') {
    if (!isEven) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${player}!`);
      break;
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'. \nLet's try again, ${player}!`);
    break;
  }
}
if (counter === 3) console.log(`Congratulations, ${player}!`);
