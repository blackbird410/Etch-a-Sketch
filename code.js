const body = document.body;
const container = document.createElement('div');
container.className = 'container';

const cont_row =  document.createElement('div');
cont_row.className = 'cont-row';

const grid = document.createElement('div');
grid.className = 'grid';

button = document.createElement('button');
button.textContent = "Add grids";
body.appendChild(button);

function generateGrid(n, row, box) {
    for (let i = 0; i < n; i++) {
        row.appendChild(grid.cloneNode(true));
    }
    
    for (let i = 0; i < n; i++) {
        box.appendChild(row.cloneNode(true));
    }
    body.appendChild(box);
}

let nSquares = 16;
generateGrid(nSquares, cont_row, container);

let b = 0;

document.addEventListener('mouseover', (event) => {
    if (event.target.className === 'grid') {
        b = b <= 100 ? b + 10: b = 0; 
        event.target.style.backgroundColor = `rgb(${b}%, ${b}%, ${b}%)`;
    }
});

button.addEventListener('click', (event) => {
    do {
        nSquares = parseInt(prompt('How much squares do you want ? (Max : 100)'));
    } while (nSquares < 0 || nSquares > 100);
    
    let box = document.querySelector('.container');
    box.remove();
    
    let newCont = document.createElement('div');
    let newRows = document.createElement('div');
    newCont.className = 'container';
    newRows.className = 'cont-row';
    generateGrid(nSquares, newRows, newCont);
});