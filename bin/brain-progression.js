#!/usr/bin/env node

import readlineSync from 'readline-sync';
import name from '../src/cli.js';

// const readlineSync = require('readline-sync');

const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

function progression() {
  const progLen = randomNumber(5, 11);
  const progStart = randomNumber(0, 100);
  const step = randomNumber(5, 50);
  const progress = [];
  progress[0] = progStart;
  for (let i = 1; i < progLen; i += 1) {
    progress[i] = progress[i - 1] + step;
  }
  return progress;
}

function main() {
  const player = name();
  console.log('What number is missing in the progression?');
  let correctAnswers = 0;
  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const prog = progression();
    const hidden = randomNumber(1, prog.length - 1);
    const correctAnswer = prog[hidden];
    prog[hidden] = '..';
    console.log(`Question: ${prog.join(' ')}`);
    const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);

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
