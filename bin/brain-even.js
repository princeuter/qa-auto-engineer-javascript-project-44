import name from "../src/cli.js"
import readlineSync from 'readline-sync';
const player = name()
console.log ('Answer "yes" if the number is even, otherwise answer "no".')
let counter = 0
for (let i = 1; i<=3; i++) {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    console.log (`Question : ${randomNumber}`)
    const answer = readlineSync.question('Your answer: ');
    const isEven = randomNumber % 2 === 0
    if (answer === 'yes') {
        if (isEven) {
            console.log (`Correct!`)
            counter++
        } else {
            console.log (`'${answer}' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, ${player}!`)
        }
    } else if (answer === 'no') {
        if (!isEven) {
            console.log (`Correct!`)
            counter++   
        } else {
            console.log (`'${answer}' is wrong answer ;(. Correct answer was 'yes'. \n Let's try again, ${player}!`)
        }
    } else {
        console.log (`'${answer}' is wrong answer ;(. Correct answer was 'yes'. \n Let's try again, ${player}!`)
    }
}   
if (counter ===3) console.log (`Congratulations, ${player} !`)