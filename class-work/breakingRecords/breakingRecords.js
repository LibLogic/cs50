'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the breakingRecords function below.
function breakingRecords(scores) {
    var lowScore = scores[0];
    var hiScore = scores[0];
    var countHi = 0;
    var countLow = 0;
    for (var i = 1; i < scores.length; i++){
        if (scores[i] > hiScore) {
            hiScore = scores[i];
            countHi++
        }
        if (scores[i] < lowScore) {
            lowScore = scores[i];
            countLow++
        }
    }
    var result = [];
    result[0] = countHi;
    result[1] = countLow;
    return result;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}