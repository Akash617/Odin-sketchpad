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

let squares = getComputedStyle(document.documentElement).getPropertyValue('--squares');

createGrid(prompt("How many sqaures per side?"));