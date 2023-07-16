const container = document.querySelector(".container");
console.log(container)

const width = 1024;
container.style.width = `${width}px`;
container.style.height = `${width}px`;

let paintFunction = paintBlack;

const gridAmount = 8;

createBoard(gridAmount);

function createBoard(dimension) {

    for (let i = 0; i < dimension; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        container.appendChild(row);
        for (let j = 0; j < dimension; j++) {
            const item = document.createElement('div');
            item.className = 'item';
            item.addEventListener('mouseover', paintOnHover);
            item.addEventListener('mousedown', paintOnClick);
            row.appendChild(item);
        }
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

function paintWhite(e) {
   e.target.style.backgroundColor = 'white'; 
}

function paintRainbow(e) {
  // Get a random color and paint the board  
}

function clearBoard() {
const items =    document.querySelectorAll('.item'); 
    for (const item  in items) {
        if (items.hasOwnProperty(item )) {
            const element = items[item ];
            
            element.style.backgroundColor = 'white';
        }
    }
}

const colorModeButton = document.querySelector('#colorMode');
colorModeButton.addEventListener('click', () => { paintFunction = paintBlack});

const rainbowModeButton = document.querySelector('#rainbowMode');
rainbowModeButton.addEventListener('click', () => { paintFunction = paintRainbow});

const eraserModeButton = document.querySelector('#eraserMode');
eraserModeButton.addEventListener('click', () => { paintFunction = paintWhite});

const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => { paintFunction = clearBoard});
