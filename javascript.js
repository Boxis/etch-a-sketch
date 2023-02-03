
const container = document.querySelector('.container');

function createGrid(numBox) {
    let board = document.querySelector('.container');
    board.style.gridTemplateColumns=`repeat(${numBox}, 1fr)`;
    for (let i = 0; i < numBox*numBox; i++) {
        const row = container.appendChild(document.createElement('div'));
        row.classList.add("box");
        container.appendChild(row);
    }
}

// Default grid is size 16
createGrid(16);


// Resize grid function, used for button
function resizeGrid() {

    mydiv = document.getElementById('grid-container');
    while (mydiv.firstChild) {
        mydiv.removeChild(mydiv.firstChild);
    }

    let grid = prompt("Please enter the size for the sketching grid", "4");
    if (grid != null) {
        createGrid(grid);
    }

    gridColor();

}


// Changes grid cover by hovering over box
function gridColor() {
    // Create object of boxes
    var elements = document.getElementsByClassName('box');
    var i;

    // Loop through every box and change color
    for (i = 0; i < elements.length; ++i) {
        elements[i].addEventListener('mouseover', changeColor)  
    }
}


// Color change to black
function changeColor() {
    this.style.backgroundColor = "black";
}


// Activates the grid color hovering function at start
gridColor();