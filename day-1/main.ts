import { readFileSync } from "fs";

const input = readFileSync("./input.txt", "utf-8").trim();
const inputArray = input.split("\n");

let part1Count = 0;
let part2Count = 0;
let dialPosition = 50;

inputArray.forEach((element) => {
    const trimmed = element.trim();
    if (!trimmed) return;
    
    const direction = trimmed[0];
    const steps = parseInt(trimmed.substring(1), 10);

    for (let i = 0; i < steps; i++) {
        if (direction === 'L') {
            dialPosition--;
            if (dialPosition < 0) dialPosition = 99;
        } else if (direction === 'R') {
            dialPosition++;
            if (dialPosition > 99) dialPosition = 0;
        }

        if (dialPosition === 0) {
            part2Count++;
        }
    }

    if (dialPosition === 0) {
        part1Count++;
    }
});

console.log(`Part 1 Answer: ${part1Count}`);
console.log(`Part 2 Answer: ${part2Count}`);