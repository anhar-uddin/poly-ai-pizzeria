const readline = require('readline');
var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const input = [];
const XMatrixNumber = input[0];
const YMatrixNumber = input[0];


const visitedBlocks = {};

r1.on('line', function (line) {
    let line2 = line.split(" ").map(Number);
    input.push(line2);
});


r1.on('close', function () {
    main(input);
});

function main(input) {
    for (let i = 1; i < input[0][1]; i++) {

        const piz = input[i];

        const pizLocation = [piz[0], piz[1]];

        const maxDistance = piz[2];

        move('' + piz[0] + '' + piz[1], pizLocation[0], pizLocation[1], maxDistance + 1, 'none');

    }

    let numberOfPizVisitedBlock = 0;

    Object.keys(visitedBlocks).forEach((blockKey) => {
        const block = visitedBlocks[blockKey];
        if (Object.keys(block).length > numberOfPizVisitedBlock) {
            numberOfPizVisitedBlock = Object.keys(block).length;
        }
    });

    console.log(numberOfPizVisitedBlock);


}

function move(pizLocation, x, y, moves, directionFrom) {

    if (moves === 0) {
        return;
    }

    const blockAsString = '' + x + '' + y;

    if (visitedBlocks.hasOwnProperty(blockAsString)) {
        if (!visitedBlocks.hasOwnProperty(visitedBlocks[blockAsString][pizLocation])) {
            visitedBlocks[blockAsString][pizLocation] = 1;
        }
    } else {
        visitedBlocks[blockAsString] = {
            [pizLocation]: 1
        };
    }

    // move right 
    if (x !== XMatrixNumber && directionFrom !== 'left') {
        move(pizLocation, x + 1, y, moves - 1, 'right');
    }

    // move left 
    if (x !== 1 && directionFrom !== 'right') {
        move(pizLocation, x - 1, y, moves - 1, 'left');
    }

    // move down
    if (y !== 1 && directionFrom !== 'up') {
        move(pizLocation, x, y - 1, moves - 1, 'down');
    }

    // move up
    if (y !== YMatrixNumber && directionFrom !== 'down') {
        move(pizLocation, x, y + 1, moves - 1, 'up');
    }

}