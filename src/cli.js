import readlineSync from 'readline-sync';

const getName = () => {
    const name = readlineSync.question('May I have your name? ');
    return name;
};

const greet = () => {
    console.log(`Hello, ${getName()}`);
};

export { greet };