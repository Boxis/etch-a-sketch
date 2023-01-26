
const container = document.querySelector('.container');

// function createGrid(numBox) {
//     for (let i = 0; i < numBox; i++) {
//         const row = container.appendChild(document.createElement('div'));
//         row.classList.add("box");
//         for (let j = 0; j <numBox; j++) {
//             const square = document.createElement('div');
//             square.classList.add("box");
//             row.appendChild(square);
//         }
//     }
// }

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