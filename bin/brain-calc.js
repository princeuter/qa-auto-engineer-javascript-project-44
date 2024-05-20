#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '../src/cli.js';

const randomChar = (chars) => {
  const tchars = chars.split('');
  return tchars[Math.floor(Math.random() * tchars.length)];
};

console.log('Welcome to the Brain Games!');
const player = name();
// console.log (`Hello, ${player} !`)
console.log('What is the result of the expression?');
let counter = 0;
for (let i = 1; i <= 3; i += 1) {
  const a = Math.floor(Math.random() * 100) + 1;
  const b = Math.floor(Math.random() * 100) + 1;
  const sign = randomChar('+-*');
  const calc = `${a} ${sign} ${b}`;
  console.log(`Question: ${calc}`);
  const answer = readlineSync.question('Your answer: ');
  let check;
  if (sign === '+') {
    check = a + b;
  } else if (sign === '-') {
    check = a - b;
  } else if (sign === '*') {
    check = a * b;
  }
  if (`${answer}` === `${check}`) {
    console.log('Correct!');
    counter += 1;
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${player}!`);
    break;
  }
}
if (counter === 3) console.log(`Congratulations, ${player}!`);
