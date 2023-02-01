
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

createGrid(16);


// Create object of boxes
var elements = document.getElementsByClassName('box');
var i;

// console.log(elements);

// Loop through every box and change color
for (i = 0; i < elements.length; ++i) {
 elements[i].addEventListener('mouseover', changeColor)  
}

function changeColor() {
    this.style.backgroundColor = "black";
}