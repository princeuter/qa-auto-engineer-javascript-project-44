#!/usr/bin/env node

import readlineSync from 'readline-sync';
import name from '../src/cli.js';

// const readlineSync = require('readline-sync');

function gcd(x, y) {
  let [a, b] = x > y ? [x, y] : [x, y];
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return Math.abs(a);
}

function generateQuestion() {
  const num1 = Math.floor(Math.random() * 100) + 1;
  const num2 = Math.floor(Math.random() * 100) + 1;
  return [num1, num2];
}

function main() {
  const player = name();
  console.log('What is the result of the expression?');
  console.log('Find the greatest common divisor of given numbers.');

  let correctAnswers = 0;
  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const [num1, num2] = generateQuestion();
    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);
    const correctAnswer = gcd(num1, num2);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'. \nLet's try again, ${player}!`);
      break;
    }
  }

  if (correctAnswers === rounds) {
    console.log(`Congratulations, ${player}!`);
  }
}

main();
