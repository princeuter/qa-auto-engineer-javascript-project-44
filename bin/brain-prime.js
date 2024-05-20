#!/usr/bin/env node

import readlineSync from 'readline-sync';
import name from '../src/cli.js';

// const readlineSync = require('readline-sync');

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) { if (num % i === 0) return false; }
  return num > 1;
};

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

function main() {
  const player = name();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let correctAnswers = 0;
  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const num = randomNumber(5, 10000);
    const correctAnswer = isPrime(num) ? 'yes' : 'no';
    console.log(`Question: ${num}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers += 1;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${player}!`);
      break;
    }
  }

  if (correctAnswers === rounds) {
    console.log(`Congratulations, ${player}!`);
  }
}

main();
