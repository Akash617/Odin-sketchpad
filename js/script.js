function createGrid(squareNum) {
    document.documentElement.style.setProperty('--squares', squareNum);
    gridContainer.innerHTML = '';

    for (i = 0; i < (squareNum*squareNum); i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.id = (i+1);
        gridContainer.appendChild(gridItem);
    }

    boxes = document.querySelectorAll('.grid-item');
    mouseClicked();
}

function mouseOver(event) {
    if (rainbow) {
        color = rainbowColors[colorCounter];
        colorCounter = (colorCounter+1)%7;
    }

    event.target.style.backgroundColor = color;
}

function mouseClicked() {
    boxes.forEach((box) => {
        box.addEventListener('mouseenter', mouseOver);
    });
}

function colorBlack() {
    rainbow = false;
    color = 'black';
}

function colorRainbow() {
    rainbow = true;
}

function eraser() {
    rainbow = false;
    color = 'white';
}

function resize() {
    squares = 0;
    while (squares <= 0 || squares > 50 ) {
        squares = prompt(`How many sqaures per side? (1-50)`);
    }
    createGrid(squares);
}

function clearScreen() {
    createGrid(squares);
}

let squares = 10;
let color = 'black';
let timer;
let rainbow = false;
const rainbowColors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'];
let colorCounter = 0;
let gridContainer = document.querySelector(".grid-container");
let buttonBlack = document.querySelector(".btn-black");
let buttonRainbow = document.querySelector(".btn-rainbow");
let buttonEraser = document.querySelector(".btn-eraser");
let buttonSize = document.querySelector(".btn-size");
let buttonClearScreen = document.querySelector(".btn-clear-screen");
let boxes;

createGrid(squares);
buttonBlack.addEventListener('click', colorBlack);
buttonRainbow.addEventListener('click', colorRainbow);
buttonEraser.addEventListener('click', eraser)
buttonSize.addEventListener('click', resize);
buttonClearScreen.addEventListener('click', clearScreen);
