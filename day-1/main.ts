import { readFileSync } from "fs";

const input = readFileSync("./input.txt", "utf-8").trim();
const inputArray = input.split("\n");

let zeroCount = 0;
let dialPosition = 50;

inputArray.forEach((element) => {
    const trimmed = element.trim();
    if (!trimmed) return;
    
    const direction = trimmed[0];
    const steps = parseInt(trimmed.substring(1), 10);

    if (direction === 'L') {
        dialPosition = (dialPosition - steps) % 100;
    } else if (direction === 'R') {
        dialPosition = (dialPosition + steps) % 100;
    }
    
    if (dialPosition < 0) {
        dialPosition += 100; // Handles negative modulo in JS
    }

    if (dialPosition === 0) {
        zeroCount++;
    }
});

console.log(`Final Answer: ${zeroCount}`);