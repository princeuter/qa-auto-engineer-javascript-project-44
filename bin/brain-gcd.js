        import name from "../src/cli.js"
        import readlineSync from 'readline-sync';

            const readlineSync = require('readline-sync');

            function gcd(a, b) {
                while (b !== 0) {
                    let temp = b;
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
                                console.log ('Welcome to the Brain Games!')
                const player = name()
                console.log (`Hello, ${player} !`)
                console.log ('What is the result of the expression?')
                let counter = 0
                                console.log("Find the greatest common divisor of given numbers.");

                                let correctAnswers = 0;
                                const rounds = 3;

                                for (let i = 0; i < rounds; i++) {
                                    const [num1, num2] = generateQuestion();
                                    console.log(Question: ${num1} ${num2});
                                    const userAnswer = parseInt(readlineSync.question("Your answer: "));
                                    const correctAnswer = gcd(num1, num2);

                                    if (userAnswer === correctAnswer) {
                                        console.log("Correct!");
                                        correctAnswers++;
                                    } else {
                                        console.log (`'${answer}' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, ${player}!`)
                                        break;
                                    }
                                }

                                if (correctAnswers === rounds) {
                                    console.log(Congratulations, ${name}!);
                                }
                            }

                            main();