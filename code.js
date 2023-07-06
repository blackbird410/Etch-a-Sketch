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
const grid_sizing = document.createElement('div');
const grid_buttons = document.createElement('div');

// Creating a slider for sizing the grids
const size_slider = document.createElement('input');
const size_output = document.createElement('output');

const rainbowButton = document.createElement('button');
const colorLabel = document.createElement('label');
const colorButton = document.createElement('input');
const colorContainer = document.createElement('div');
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
grid_buttons.className = 'grid_buttons';
switch_io.className = 'switch';
checkBox.type = 'checkbox';
checkBox.checked = 'checked';
slider.className = 'slider';

big_cont.className = 'big_container';
left.className = 'left';
right.className = 'right';

grid_sizing.className = 'grid_sizing';
rainbowButton.className = 'rainbow';
colorLabel.for = 'color';
colorButton.className = 'color';
colorButton.id = 'color';
colorContainer.className = 'colorContainer';
blackShadesButton.className = 'blackShades';
clearButton.className = 'clearButton';

footer.className = 'footer';
link.className ='githubLink';
githubLogo.className = 'fa';
githubLogo.classList.add('fa-github');

size_slider.type = 'range';
size_slider.name = 'size';
size_slider.id = 'size_slider';
size_slider.value = '16';
size_slider.min = '16';
size_slider.max = '64';
size_slider.step = '1';
size_output.className = 'size_output';
size_output.for = 'size';

switch_io.appendChild(checkBox);
switch_io.appendChild(slider);

header_left.textContent = 'Etch-A-Sketch';
size_output.textContent = `Grid Size: ${size_slider.value}x${size_slider.value}`;

rainbowButton.textContent = 'Rainbow';
colorLabel.textContent = 'Choose color';
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
grid_sizing.appendChild(size_slider);
grid_sizing.appendChild(size_output);
colorContainer.appendChild(colorButton);
colorContainer.appendChild(colorLabel);
grid_buttons.appendChild(rainbowButton);
grid_buttons.appendChild(blackShadesButton);
grid_buttons.appendChild(clearButton);
left.appendChild(colorContainer);
left.appendChild(grid_sizing);
left.appendChild(grid_buttons);
right.appendChild(container);
big_cont.appendChild(left);
big_cont.appendChild(right);
link.appendChild(githubLogo);
footer.appendChild(link);
body.appendChild(header);
body.appendChild(big_cont);
body.appendChild(footer);

switch_theme();
checkBox.onclick = switch_theme;

//-----------------------------------------------------------------------
function switch_theme() {
    let c = document.querySelector('.container');
    let text_color;
    let bg_color;

    if (checkBox.checked === true) {
         text_color = "white";
         bg_color = "#1F2937";
    } else {
        text_color = "#1F2937";
        bg_color = "white";
        c.style.boxShadow = "10px 5px 5px #1F2937";
    }

    body.style.backgroundColor = bg_color;
    link.style.color = text_color;
    size_output.style.color = text_color;
    colorLabel.style.color = text_color;
}

function clearGrid () {
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

let nSquares = size_slider.value;
generateGrid(nSquares, cont_row, container);

let b = 0;
let colorType = 0;

size_slider.addEventListener("input", () => {
    let d = size_slider.value;
    size_output.textContent = `Grid Size: ${d}x${d}`;
    nSquares = size_slider.value;
    clearGrid();
});

colorButton.addEventListener('input', () => {
    colorType = 0;
});

rainbowButton.addEventListener('click', () => {
    colorType = 1;
});

blackShadesButton.addEventListener('click', () => {
    colorType = 2;
});

clearButton.addEventListener('click', clearGrid);

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
