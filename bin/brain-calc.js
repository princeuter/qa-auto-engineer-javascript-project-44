import name from "../src/cli.js"
import readlineSync from 'readline-sync';


const randomChar = (chars) => {
    chars = chars.split('')
    return chars[Math.floor(Math.random() * chars.length)]
}

console.log ('Welcome to the Brain Games!')
const player = name()
console.log (`Hello, ${player} !`)
console.log ('What is the result of the expression?')
let counter = 0
for (let i = 1; i<=3; i++) {
    const a = Math.floor(Math.random() * 100) + 1;
    const b = Math.floor(Math.random() * 100) + 1;
    const sign = randomChar ('+-*')
    const calc = `${a} ${sign} ${b}`
    console.log (`Question : ${calc}`)
    const answer = readlineSync.question('Your answer: ');
    const check = global.eval(calc)
    if (`${answer}` === `${check}`) {
        console.log (`Correct!`)
        counter++  
    } else { 
        console.log (`'${answer}' is wrong answer ;(. Correct answer was 'no'. \n Let's try again, ${player}!`)
    }
}   
if (counter ===3) console.log (`Congratulations, ${player} !`)