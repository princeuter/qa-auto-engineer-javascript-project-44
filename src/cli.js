import readlineSync from 'readline-sync';
export default function name() {
    const name = readlineSync.question('May I have your name?: ');
    console.log(`Hello, ${name}`)
    console.log("Welcome to the Brain Games!")
    return name
}