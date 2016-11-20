import * as stats from "./averageService.js";

const scores = [90, 75, 60, 99, 94, 30];
const averageScore = stats.getAvg(scores);
const sumScore = stats.getSum(scores);
const messageToDisplayAvg = `average score ${averageScore}`;
const messageToDisplaySum = `sum score ${sumScore}`;

document.write(messageToDisplayAvg);
document.write(messageToDisplaySum);
