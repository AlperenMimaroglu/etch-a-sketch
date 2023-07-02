const container = document.querySelector(".container");
console.log(container)

const gridAmount = 256;
for (let i = 0; i < gridAmount; i++) {
    const item = document.createElement('div');
    item.className = 'item';
    container.appendChild(item);
}