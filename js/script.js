function createGrid(squareNum) {
    let gridContainer = document.querySelector(".grid-container");
    document.documentElement.style.setProperty('--squares', squareNum);

    for (i = 0; i < (squareNum*squareNum); i++) {
        let gridItem = document.createElement('div');
        gridItem.classList.add('grid-item');
        gridItem.id = (i+1);
        gridContainer.appendChild(gridItem);
    }
}

let squares = 0;

while (squares <= 0 || squares > 50 ) {
    squares = prompt(`How many sqaures per side? (1-50)`);
}

createGrid(squares);

const boxes = document.querySelectorAll('.grid-item');

boxes.forEach((box) => {
  box.addEventListener('mouseenter', function(event) {
    event.target.style.backgroundColor = "black";
  });
});