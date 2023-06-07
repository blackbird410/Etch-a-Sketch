const body = document.body;
const header = document.createElement('div');
const header_left = document.createElement('div');
const header_right = document.createElement('div');
const container = document.createElement('div');
const cont_row =  document.createElement('div');
const grid = document.createElement('div');
const switch_io = document.createElement('label');
const checkBox = document.createElement('input');
const slider = document.createElement('span');
const big_cont = document.createElement('div');
const left = document.createElement('div');
const right = document.createElement('div');
const addGridButton = document.createElement('button');
const rainbowButton = document.createElement('button');
const colorButton = document.createElement('input');
const blackShadesButton = document.createElement('button');
const clearButton = document.createElement('button');
const footer = document.createElement('div');
const link = document.createElement('a');
const githubLogo = document.createElement('i');

header.className = 'header';
header_left.className = 'header_left';
header_right.className = 'header_right';
container.className = 'container';
cont_row.className = 'cont-row';
grid.className = 'grid';
switch_io.className = 'switch';
checkBox.type = 'checkbox';
slider.className = 'slider';
big_cont.className = 'big_container';
left.className = 'left';
right.className = 'right';
rainbowButton.className = 'rainbow';
colorButton.className = 'color';
blackShadesButton.className = 'blackShades';
clearButton.className = 'clearButton';
footer.className = 'footer';
link.className ='githubLink';
githubLogo.className = 'fa';
githubLogo.classList.add('fa-github');



switch_io.appendChild(checkBox);
switch_io.appendChild(slider);

header_left.textContent = 'Etch-A-Sketch';
addGridButton.textContent = "Add grids";
rainbowButton.textContent = 'Rainbow';
colorButton.type = 'color';
colorButton.value = '#00FF00';
blackShadesButton.textContent = 'Black Shades';
clearButton.textContent = 'Clear';
link.textContent = 'Copyright © 2023 Blackbird410';
link.href = 'https://github.com/blackbird410/';
link.target = '_blank';
link.style.color = "#1F2937";
githubLogo.style.fontSize = "36px";

header_right.appendChild(switch_io);
header.appendChild(header_left);
header.appendChild(header_right);
left.appendChild(addGridButton);
left.appendChild(colorButton);
left.appendChild(rainbowButton);
left.appendChild(blackShadesButton);
left.appendChild(clearButton);
right.appendChild(container);
big_cont.appendChild(left);
big_cont.appendChild(right);
link.appendChild(githubLogo);
footer.appendChild(link);
body.appendChild(header);
body.appendChild(big_cont);
body.appendChild(footer);

checkBox.onclick = switch_theme;

//-----------------------------------------------------------------------
function switch_theme() {
    let c = document.querySelector('.container');
    if (checkBox.checked === true) {
        body.style.backgroundColor = "#1F2937";
        link.style.color = 'white';
    } else {
        body.style.backgroundColor = "white";
        link.style.color = '#1F2937';
        c.style.boxShadow = "10px 5px 5px #1F2937";
    }

}

function clearGrid (nSq) {
    let box = document.querySelector('.container');
    box.remove();
    
    let newCont = document.createElement('div');
    let newRows = document.createElement('div');
    newCont.className = 'container';
    newRows.className = 'cont-row';
    generateGrid(nSquares, newRows, newCont);
}

function generateGrid(n, row, box) {
    for (let i = 0; i < n; i++) {
        row.appendChild(grid.cloneNode(true));
    }
    
    for (let i = 0; i < n; i++) {
        box.appendChild(row.cloneNode(true));
    }
    right.appendChild(box);
    adjustGrid();
}

function f(x) {
    return 258.03/x;
}

function adjustGrid() {
    let n = f(nSquares) > 0 ? f(nSquares) : 1;
    let g = document.querySelectorAll('.grid');
    g.forEach(elt => {
        elt.style.padding = `${n}px`;
    });
}

function genRainbow() {
    return randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
}

//-------------------------------------------------------------------

let nSquares = 16;
generateGrid(nSquares, cont_row, container);

let b = 0;
let colorType = 0;

rainbowButton.addEventListener('click', () => {
    colorType = 1;
});

blackShadesButton.addEventListener('click', () => {
    colorType = 2;
});

clearButton.addEventListener('click', clearGrid);

/*window.addEventListener('resize', () => {
    if (window.innerWidth <= 600) {
        container.style.maxWidth = '450px';
        container.style.maxHeight = '450px';
    } 
});
*/

document.addEventListener('mouseover', (event) => {
    if (event.target.className === 'grid') {
        if (colorType === 1) {
            event.target.style.backgroundColor = genRainbow();
        } else if (colorType === 2) {
            b = b <= 100 ? b + 10: b = 0; 
            event.target.style.backgroundColor = `rgb(${b}%, ${b}%, ${b}%)`;
        } else {
            event.target.style.backgroundColor = colorButton.value;
        }
    }
});

addGridButton.addEventListener('click', (event) => {
    do {
        nSquares = parseInt(prompt('How much squares do you want ? (Max : 100)'));
    } while (nSquares < 0 || nSquares > 100);
    
    clearGrid(nSquares);
});