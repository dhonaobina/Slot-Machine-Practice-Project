//1. Player Deposit some money
//2. Determine number of lines to bet on
//3. Collect a bet amount 
//4. Spin slot machine
//5. Check if the player won
//6. if win, Congratulate and give price to player 
//7. if lost, apologise and tell player to try again, check if no money left
//8. Continue or End Game

// function deposit() 
// {
//     return 1;
// }

// const x = deposit();

const prompt = require("prompt-sync") ();

const deposit = () => {
    while(true) {
        const depositAmount = prompt("Enter a deposit amount:  ")
        const numberDepositAmount = parseFloat(depositAmount);

        if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
            console.log("Invalid deposit amount, try again.");
        } else {
            return numberDepositAmount;
        }
    }
};

const getNumberOfLines = () => {
    while(true) {
        const lines = prompt("Enter the number of lines to bet on (1-3): ")
        const numberOfLines = parseInt(lines);

        if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3 ) {
            console.log("Invalid number of lines, Please Try Again");
        } else {
            return numberOfLines;
        }
    }
};

const getBet = (balance, lines) => {
    while(true) {
        const bet = prompt("Enter the total bet per line: ")
        const numberBet = parseFloat(bet);

        if (isNaN(numberBet) || numberBet <= 0 || numberBet > balance / lines ) {
            console.log("Invalid bet, Please Try Again");
        } else {
            return numberBet;
        }
    }
};


let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
