const body = document.body;
const container = document.createElement('div');
container.className = 'container';

const cont_row =  document.createElement('div');
cont_row.className = 'cont-row';

const grid = document.createElement('div');
grid.className = 'grid';

for (let i = 0; i < 16; i++) {
    cont_row.appendChild(grid.cloneNode(true));
}

for (let i = 0; i < 16; i++) {
    container.appendChild(cont_row.cloneNode(true));
}

body.appendChild(container);

container.addEventListener('mouseover', (event) => {
    if (event.target.className === 'grid') {
        event.target.style.backgroundColor = 'orange';
    }
});
