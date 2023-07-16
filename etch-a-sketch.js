const container = document.querySelector(".container");
console.log(container)

const width = 1024;
container.style.width = `${width}px`;
container.style.height = `${width}px`;

const gridAmount = 8;

let paintFunction = paintBlack;
for (let i = 0; i < gridAmount; i++) {
    const row = document.createElement('div');
    row.className = 'row';
    container.appendChild(row);
    for (let j = 0; j < gridAmount; j++) {
        const item = document.createElement('div');
        item.className = 'item';
        item.addEventListener('mouseover', paintOnHover);
        item.addEventListener('mousedown', paintOnClick);
        row.appendChild(item);
    }
}

function paintOnHover(e) {
    if (e.buttons > 0) {
        paintBlock(e);
    }
}

function paintOnClick(e) {
        paintBlock(e);
}

function paintBlock(e) {
    paintFunction(e);
}

function paintBlack(e) {
    e.target.style.backgroundColor = "black";
}
