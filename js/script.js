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
}

function changeColor(event) {
    event.target.style.backgroundColor = "black";
}

function mouseClicked() {
    boxes.forEach((box) => {
        box.addEventListener('mouseenter', changeColor);
    });
}

function stopClick() {
    boxes.forEach((box) => {
        box.removeEventListener('mouseenter', changeColor);
    });
}

function clearScreen() {
    squares = 0;
    while (squares <= 0 || squares > 50 ) {
        squares = prompt(`How many sqaures per side? (1-50)`);
    }
    createGrid(squares);
}

let squares = 0;
let timer;
let gridContainer = document.querySelector(".grid-container");
let button = document.querySelector("button");
let boxes;

while (squares <= 0 || squares > 50 ) {
    squares = prompt(`How many sqaures per side? (1-50)`);
}

createGrid(squares);

button.addEventListener('click', clearScreen);
gridContainer.addEventListener('mousedown', mouseClicked);
gridContainer.addEventListener('mouseup', stopClick);
