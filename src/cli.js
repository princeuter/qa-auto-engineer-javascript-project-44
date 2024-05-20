import readlineSync from 'readline-sync';

export default function name() {
  const name1 = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name1}`);
  console.log('Welcome to the Brain Games!');
  return name1;
}
