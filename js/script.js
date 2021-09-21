function createGrid(squareNum) {
    document.documentElement.style.setProperty('--squares', squareNum);

    for (i = 0; i < (squareNum*squareNum); i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.id = (i+1);
        gridContainer.appendChild(gridItem);
    }
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

let squares = 0;
let timer;
let gridContainer = document.querySelector(".grid-container");

while (squares <= 0 || squares > 50 ) {
    squares = prompt(`How many sqaures per side? (1-50)`);
}

createGrid(squares);

const boxes = document.querySelectorAll('.grid-item');

gridContainer.addEventListener('mousedown', mouseClicked);
gridContainer.addEventListener('mouseup', stopClick);
