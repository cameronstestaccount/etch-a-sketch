const GRID_SIZE = 16;
const WIDTH = 800;
const boxSize = WIDTH/GRID_SIZE;

const container = document.querySelector('.container')

for(let i = 0; i<16; ++i){
    let row = document.createElement('div');
    row.classList.add('row');

    for(let j = 0; j<16; ++j){
        let box = document.createElement('div');
        box.classList.add('box');
        box.setAttribute('style', `width: ${boxSize}px; height: ${boxSize}px`)
        row.appendChild(box);
    }

    container.appendChild(row);
}